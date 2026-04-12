import express from "express";

const app = express();
const port = process.env.PORT || 3000;

const articles = [
	{
		title: "Understanding Cat Body Language",
		href: "https://www.petmd.com/cat/general-health/cat-body-language",
		reaction: "This one helped decode head-tilt moments. Biggest takeaway: tail movement can mean excitement, not just anger."
	},
	{
		title: "General Cat Care Basics",
		href: "https://www.aspca.org/pet-care/cat-care/general-cat-care",
		reaction: "A practical checklist style refresher, especially useful for toy rotation and routine care habits."
	},
	{
		title: "Keeping Your Cat Happy Indoors",
		href: "https://www.humanesociety.org/resources/keeping-your-cat-happy-indoors",
		reaction: "Window time, climbing space, and short play bursts line up with what works well at home."
	}
];

app.get("/api/articles", (_req, res) => {
	res.json({ articles });
});

app.listen(port, () => {
	console.log(`API server running on http://localhost:${port}`);
});
