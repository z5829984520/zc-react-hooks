const path = require("path");
const typescript = require("rollup-plugin-typescript2");
const commonjs = require("rollup-plugin-commonjs");
const resolve = require("rollup-plugin-node-resolve");
const pkg = require("./package.json");

const extensions = [
  ".js",
  ".ts",
  ".tsx"
];
const resolvePath = _path => path.resolve(__dirname, _path);


module.exports = {
  input: resolvePath("./packages/index.ts"),
  output: [
    {
      name: pkg.name,
      format: "es",
      file: pkg.main
    },
    {
      name: pkg.name,
      format: "umd",
      file: pkg.umd,
      globals: {
        "react": "React",
        "tslib": "tslib",
        "lodash": "lodash"
      }
    },
    {
      name: pkg.name,
      format: "cjs",
      file: pkg.cjs,
    },
    {
      name: pkg.name,
      format: "amd",
      file: pkg.amd
    }
  ],
  external: ["lodash", "react", "tslib"],
  plugins: [
    resolve({
      extensions
    }),
    commonjs(),
    typescript({
      tsconfig: resolvePath("./tsconfig.json"),
      extensions
    })
  ]
};
