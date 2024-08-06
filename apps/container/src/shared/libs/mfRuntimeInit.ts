import { init } from "@module-federation/enhanced/runtime";
import React from "react";
import ReactDOM from "react-dom";

const DEFAULT_REMOTES: Parameters<typeof init>["0"]["remotes"] = [
  {
    name: "remote1",
    entry: "http://localhost:8001/mf-manifest.json",
  },
];

export const mfRuntimeInit = () => {
  init({
    name: "container",
    remotes: DEFAULT_REMOTES,
    shared: {
      react: {
        version: "18.3.1",
        scope: "default",
        lib: () => React,
        shareConfig: {
          singleton: true,
          requiredVersion: "18.3.1",
        },
      },
      "react-dom": {
        version: "18.3.1",
        scope: "default",
        lib: () => ReactDOM,
        shareConfig: {
          singleton: true,
          requiredVersion: "18.3.1",
        },
      },
      "react-router-dom": {
        version: "6.11.2",
        scope: "default",
        lib: () => require("react-router-dom"),
        shareConfig: {
          singleton: true,
          requiredVersion: "6.26.0",
        },
      },
    },
  });
};
