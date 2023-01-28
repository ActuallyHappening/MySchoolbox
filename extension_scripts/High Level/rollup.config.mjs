// rollup.config.js
/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
	/* your config */
	input: './content.js',
	output: {
		file: '../Resources/content.js',
		// format: 'iife',
		format: 'es',
	}
};
export default config;
