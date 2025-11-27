// Configuration file for the site
// Copy values from environment variables in production or replace placeholders for local use.

const CONFIG = {
	// Get your API key from: https://www.perplexity.ai/settings/api
	PERPLEXITY_API_KEY: process.env.PERPLEXITY_API_KEY || 'pplx-REPLACE_WITH_YOUR_KEY',

	// API Configuration
	API_ENDPOINT: process.env.API_ENDPOINT || 'https://api.perplexity.ai/chat/completions',
	MODEL: process.env.MODEL || 'sonar-pro',

	// Optional settings
	MAX_TOKENS: Number(process.env.MAX_TOKENS) || 1000,
	TEMPERATURE: Number(process.env.TEMPERATURE) || 0.2,
	TOP_P: Number(process.env.TOP_P) || 0.9
};

// Export for Node.js usage
if (typeof module !== 'undefined' && module.exports) {
	module.exports = CONFIG;
}

// For browsers you can also attach to window (optional)
if (typeof window !== 'undefined') {
	window.CONFIG = CONFIG;
}
