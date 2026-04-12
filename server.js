import express from "express";

const app = express();
const port = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === "production";
const PROD_ORIGIN = "https://thecatwindow.com";

// CORS — allow production origin or localhost in dev
app.use((req, res, next) => {
	const origin = req.headers.origin;
	const allowed = isProd
		? [PROD_ORIGIN]
		: [PROD_ORIGIN, "http://localhost:5173", "http://127.0.0.1:5173"];

	if (origin && allowed.includes(origin)) {
		res.setHeader("Access-Control-Allow-Origin", origin);
	}
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");

	if (req.method === "OPTIONS") return res.sendStatus(204);
	next();
});

app.use(express.json());

const articles = [
	{
		href: "https://www.petmd.com/cat/general-health/cat-body-language",
		title: "Understanding Cat Body Language",
		reaction: "This one helped decode head-tilt moments. Biggest takeaway: tail movement can mean excitement, not just anger."
	},
	{
		href: "https://www.aspca.org/pet-care/cat-care/general-cat-care",
		title: "General Cat Care Basics",
		reaction: "A practical checklist style refresher, especially useful for toy rotation and routine care habits."
	},
	{
		href: "https://www.humanesociety.org/resources/keeping-your-cat-happy-indoors",
		title: "Keeping Your Cat Happy Indoors",
		reaction: "Window time, climbing space, and short play bursts line up with what works well at home."
	}
];

// In-memory impressions store keyed by article href
const impressions = new Map();

app.get("/api/articles", (_req, res) => {
	res.json({ articles });
});

app.get("/api/impressions", (_req, res) => {
	res.json({ impressions: Object.fromEntries(impressions) });
});

app.post("/api/impressions", (req, res) => {
	const { href, text } = req.body;
	if (!href || typeof text !== "string") {
		return res.status(400).json({ error: "href and text are required" });
	}
	impressions.set(href, text.trim());
	res.json({ ok: true });
});

app.listen(port, () => {
	const base = isProd ? PROD_ORIGIN : `http://localhost:${port}`;
	console.log(`API server running — ${base} (NODE_ENV=${process.env.NODE_ENV || "development"})`);
});
