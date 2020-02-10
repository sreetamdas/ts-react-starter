module.exports = {
	roots: ["<rootDir>/src"],
	moduleDirectories: ["src", "node_modules"],
	testMatch: [
		"**/__tests__/**/*.+(ts|tsx|js)",
		"**/?(*.)+(spec|test).+(ts|tsx|js)",
	],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
		".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
			"jest-transform-stub",
	},
	globals: {
		"ts-jest": {
			diagnostics: false,
		},
	},
	// verbose: true,
};
