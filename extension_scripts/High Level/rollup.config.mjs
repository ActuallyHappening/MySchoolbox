// rollup.config.js
/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
	/* your config */
	input: '../Build/content.js',
	output: {
		file: '../Resources/content.js',
		// format: 'iife',
		format: 'iife',
	}
};
export default config;
