import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
	input: '../Build/bundle.js',
	output: {
		file: '../Build/bundled.js',
		format: 'iife'
	},
	plugins: [nodeResolve()]
};