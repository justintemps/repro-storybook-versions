import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import { createRequire } from "node:module";
import del from "rollup-plugin-delete";
import livereload from "rollup-plugin-livereload";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import multiInput from "rollup-plugin-multi-input";

const require = createRequire(import.meta.url);
const packageJson = require("./package.json");

const config = {
  input: [
    "src/index.ts",
    "src/components/**/index.ts",
    "src/components/**/*.tsx",
  ],
  external: [
    ...Object.keys(packageJson.dependencies),
    ...Object.keys(packageJson.devDependencies),
  ],
  output: [
    {
      dir: "lib/esm",
      format: "esm",
    },
    {
      dir: "lib/cjs",
      format: "cjs",
    },
  ],
};

const basePlugins = [
  resolve(),
  commonjs(),
  json(),
  multiInput.default({ relative: "src/" }),
  typescript({
    baseUrl: "./src",
    useTsconfigDeclarationDir: true,
    tsconfig: "./tsconfig.build.json",
  }),
  peerDepsExternal(),
];

export default function (commandLineArgs) {
  let plugins;

  // For production
  if (!commandLineArgs.configDevelop) {
    plugins = [...basePlugins, del({ targets: "lib/*" })];
  }

  // for development
  if (commandLineArgs.configDevelop) {
    plugins = [
      ...basePlugins,
      del({ targets: "lib/*", runOnce: true }),
      livereload(),
    ];
  }

  config.plugins = plugins;
  return config;
}
