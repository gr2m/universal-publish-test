import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

const plugins = [resolve(), commonjs()];

export default [
  {
    output: {
      file: "bundle.js",
      format: "cjs"
    },
    plugins,
    input: "index.mjs"
  }
];
