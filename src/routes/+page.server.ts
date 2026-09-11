import { MEDIUM_FEED, parseFeed, type Article } from '$lib/medium';
import snapshot from '$lib/medium-snapshot.json';

// Fetched once at build time and shipped as static HTML — a new Medium post
// shows up on the next deploy without any code change.
export const prerender = true;

export async function load({ fetch }) {
	try {
		const response = await fetch(MEDIUM_FEED);
		if (!response.ok) throw new Error(`Medium feed responded ${response.status}`);

		const articles = parseFeed(await response.text());
		if (!articles.length) throw new Error('Medium feed returned no items');

		return { articles };
	} catch (error) {
		// Never fail the build because Medium is having a moment — fall back to the
		// last known good list (regenerate with: node scripts/sync-medium.ts).
		console.warn('[medium] falling back to snapshot:', (error as Error).message);
		return { articles: snapshot as Article[] };
	}
}
