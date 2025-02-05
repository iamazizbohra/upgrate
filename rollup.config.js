import { globSync } from 'glob';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
	{
		input: Object.fromEntries(
			globSync('src/**/*.js').map(file => [
				// This removes `src/` as well as the file extension from each
				// file, so e.g. src/nested/foo.js becomes nested/foo
				path.relative(
					'src',
					file.slice(0, file.length - path.extname(file).length)
				),
				// This expands the relative paths to absolute paths, so e.g.
				// src/nested/foo becomes /project/src/nested/foo.js
				fileURLToPath(new URL(file, import.meta.url))
			])
		),
		output: [
			{
				dir: 'dist/cjs',
				format: 'cjs'
			},
			{
				dir: 'dist/esm',
				format: 'esm'
			},
		],
		external: [

		],
		plugins: [
			resolve(),
			commonjs(), // convert CommonJS module to ES modules
		]
	},
];
