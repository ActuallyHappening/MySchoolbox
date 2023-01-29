// rollup.config.js

import json from '@rollup/plugin-json';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
	/* your config */
	input: './Build/content.js',
	output: {
		file: '../Resources/content.js',
		// format: 'iife',
		format: 'iife',
	},
	plugins: [
		json(),
	]
};
export default config;
