const IMPRESSIONS_KEY = "cat-window:impressions";

const REACTION_KEYS = ["heart-eyes", "smile", "thinking", "paws"];

function normalizeImpression(value) {
	if (typeof value === "string" && REACTION_KEYS.includes(value)) {
		return value;
	}

	if (!value || typeof value !== "object" || Array.isArray(value)) {
		return null;
	}

	if (typeof value.selected === "string" && REACTION_KEYS.includes(value.selected)) {
		return value.selected;
	}

	const matchingKey = REACTION_KEYS.find((key) => Number(value[key]) > 0);
	return matchingKey || null;
}

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
		if (!raw) {
			return {};
		}

		const parsed = JSON.parse(raw);
		return Object.fromEntries(
			Object.entries(parsed).map(([href, value]) => [href, normalizeImpression(value)])
		);
	} catch {
		return {};
	}
}

export async function saveImpression(href, selected) {
	try {
		const current = await fetchImpressions();
		current[href] = selected;
		localStorage.setItem(IMPRESSIONS_KEY, JSON.stringify(current));
	} catch {
		throw new Error("Unable to save impression.");
	}
}
