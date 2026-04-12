const IMPRESSIONS_KEY = "cat-window:impressions";

export async function fetchArticles() {
	const response = await fetch("/articles.json");

	if (!response.ok) {
		throw new Error("Unable to load articles.");
	}

	const payload = await response.json();
	return payload.articles || [];
}

export async function fetchImpressions() {
	try {
		const raw = localStorage.getItem(IMPRESSIONS_KEY);
		return raw ? JSON.parse(raw) : {};
	} catch {
		return {};
	}
}

export async function saveImpression(href, text) {
	try {
		const current = await fetchImpressions();
		current[href] = text;
		localStorage.setItem(IMPRESSIONS_KEY, JSON.stringify(current));
	} catch {
		throw new Error("Unable to save impression.");
	}
}
