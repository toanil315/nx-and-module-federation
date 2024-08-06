import { dependencies } from "../package.json";
import type { Rspack } from "@rsbuild/core";

export const mfConfig: Rspack.ModuleFederationPluginOptions = {
  name: "container",
  remotes: {},
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
    "react-router-dom": {
      singleton: true,
      requiredVersion: dependencies["react-router-dom"],
    },
  },
};
