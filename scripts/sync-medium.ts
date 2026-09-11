/**
 * Refreshes the offline fallback used when the Medium feed is unreachable at build time.
 * Run with: npm run sync:medium
 */
import { writeFileSync } from 'node:fs';
import { MEDIUM_FEED, parseFeed } from '../src/lib/medium.ts';

const response = await fetch(MEDIUM_FEED);
if (!response.ok) throw new Error(`Medium feed responded ${response.status}`);

const articles = parseFeed(await response.text());
if (!articles.length) throw new Error('Medium feed returned no items');

writeFileSync(
	new URL('../src/lib/medium-snapshot.json', import.meta.url),
	JSON.stringify(articles, null, '\t') + '\n'
);
console.log(`Synced ${articles.length} articles from Medium.`);
