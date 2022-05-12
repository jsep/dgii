const config = {
	testEnvironment: 'jest-environment-jsdom',
	preset: "ts-jest",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	// testEnvironment: "node",
	transform: {
		"^.+\\.ts?$": "ts-jest",
	},
	transformIgnorePatterns: ["<rootDir>/node_modules/"],
};

module.exports = config;
