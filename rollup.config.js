// import babel from 'rollup-plugin-babel';

// module.exports = {
//   input: 'src/index.js',
//   output: {
//     file: 'dist/bundle.js',
//     format: 'umd',
//     name: 'ReactGameApp',
//     globals: {
//       react: 'React',
//       'react-dom': 'ReactDOM',
//     },
//   },
//   external: ['react', 'react-dom'],
//   plugins: [
//     babel({
//       exclude: 'node_modules/**',
//       presets: ['@babel/preset-react'],
//     }),
//   ],
// };

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import packageJson from "./package.json" assert { type: "json" };
import json from "@rollup/plugin-json";

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            json(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
        ]
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
    },
];