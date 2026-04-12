export async function fetchArticles() {
	const response = await fetch("/api/articles");

	if (!response.ok) {
		throw new Error("Unable to load articles from server.");
	}

	const payload = await response.json();
	return payload.articles || [];
}
