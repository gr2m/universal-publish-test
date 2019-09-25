import resolve from "rollup-plugin-node-resolve";

export default [
  {
    output: {
      file: "bundle.js",
      format: "esm"
    },
    plugins: [
      resolve({
        browser: true
      })
    ],
    input: "index.js"
  }
];
