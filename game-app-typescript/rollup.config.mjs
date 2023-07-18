import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

// import packageJson from './package.json' assert { type: 'json' };
import json from '@rollup/plugin-json';

export default [
  {
    input: 'src/index.tsx',
    output: {
      dir: 'dist', // Specify the output directory instead of file path
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [
      peerDepsExternal(),
      json(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss(),
    ],
  },
];
