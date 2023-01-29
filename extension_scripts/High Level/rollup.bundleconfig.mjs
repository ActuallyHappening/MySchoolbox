import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
	input: 'bundle.js',
	output: {
		file: './bundled.js',
		format: 'iife'
	},
	plugins: [nodeResolve()]
};