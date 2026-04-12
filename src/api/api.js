export async function fetchArticles() {
	const response = await fetch("/api/articles");

	if (!response.ok) {
		throw new Error("Unable to load articles from server.");
	}

	const payload = await response.json();
	return payload.articles || [];
}

export async function fetchImpressions() {
	const response = await fetch("/api/impressions");

	if (!response.ok) {
		throw new Error("Unable to load impressions from server.");
	}

	const payload = await response.json();
	return payload.impressions || {};
}

export async function saveImpression(href, text) {
	const response = await fetch("/api/impressions", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ href, text })
	});

	if (!response.ok) {
		throw new Error("Unable to save impression.");
	}
}
