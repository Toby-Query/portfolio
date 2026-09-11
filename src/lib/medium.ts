/**
 * Parses the Medium RSS feed into the article shape the Writing section renders.
 * Kept dependency-free so it can run at build time inside +page.server.ts.
 */

export type Article = {
	title: string;
	link: string;
	date: string;
	dateLabel: string;
	readingTime: string;
	tags: string[];
	excerpt: string;
};

export const MEDIUM_PROFILE = 'https://medium.com/@tendanifallain';
export const MEDIUM_FEED = 'https://medium.com/feed/@tendanifallain';

const WORDS_PER_MINUTE = 200;
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

function decodeEntities(input: string): string {
	return input
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#0?39;/g, "'")
		.replace(/&apos;/g, "'")
		.replace(/&nbsp;/g, ' ')
		.replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
		.replace(/&amp;/g, '&');
}

/** Grabs a tag's text, whether or not Medium wrapped it in CDATA. */
function tagText(item: string, tag: string): string {
	const match = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
	if (!match) return '';
	const cdata = match[1].match(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/);
	return decodeEntities(cdata ? cdata[1] : match[1]).trim();
}

function stripHtml(html: string): string {
	return (
		decodeEntities(html.replace(/<[^>]+>/g, ' '))
			.replace(/\s+/g, ' ')
			// Stripping inline tags leaves gaps before punctuation ("written . You can"),
			// but only close the gap when the mark really ends a word — not before ".m4a".
			.replace(/\s+([,.;:!?])(?=\s|$)/g, '$1')
			.trim()
	);
}

function truncate(text: string, limit: number): string {
	if (text.length <= limit) return text;
	const cut = text.slice(0, limit);
	const lastSpace = cut.lastIndexOf(' ');
	return `${cut.slice(0, lastSpace > 0 ? lastSpace : limit).replace(/[,;:.\-—]$/, '')}…`;
}

export function parseFeed(xml: string): Article[] {
	const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];

	return items.map((item) => {
		const body = stripHtml(tagText(item, 'content:encoded'));
		const minutes = Math.max(
			1,
			Math.round(body.split(' ').filter(Boolean).length / WORDS_PER_MINUTE)
		);
		const published = new Date(tagText(item, 'pubDate'));

		const tags = [...item.matchAll(/<category[^>]*>([\s\S]*?)<\/category>/g)]
			.map(([, raw]) => decodeEntities(raw.replace(/<!\[CDATA\[|\]\]>/g, '')).trim())
			.filter(Boolean)
			.slice(0, 3)
			.map((tag) => tag.replace(/-/g, ' ').toUpperCase());

		return {
			title: tagText(item, 'title'),
			// Drop Medium's `?source=rss-...` referral noise.
			link: tagText(item, 'link').split('?')[0],
			date: published.toISOString(),
			dateLabel: `${published.getUTCDate()} ${MONTHS[published.getUTCMonth()]} ${published.getUTCFullYear()}`,
			readingTime: `${minutes} MIN READ`,
			tags,
			excerpt: truncate(body, 170)
		};
	});
}
