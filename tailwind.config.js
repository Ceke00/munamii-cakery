/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				pink: "#CB5EA2",
				green: "#30AB95",
				blue: "#aadce6",
				darkbrown: "#553917",
				lightpink: "#F6E1E0",
				darkgreen: "#115F51",
			},
			fontFamily: {
				quicksand: ["Quicksand", "sans-serif"],
				indie: ["Indie Flower", "sans-serif"],
				star: ["StardustAdventure", "sans-serif"],
			},
			/* screens: {
				lg: "1024px",
			}, */
		},
	},
	plugins: [require("@tailwindcss/aspect-ratio"), require("@tailwindcss/forms")],
};
