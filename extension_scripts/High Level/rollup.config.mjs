// rollup.config.js

import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = [{
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
}, {
		input: './Build/bundle.js',
		output: {
			file: './Build/bundled.js',
			format: 'iife'
		},
		plugins: [nodeResolve(), json()]
	}];
export default config;
