import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { mfConfig } from "./module-federation.config";

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 8000,
  },
  html: {
    mountId: "app",
    title: "Container App",
  },
  tools: {
    rspack: (_, { appendPlugins }) => {
      appendPlugins([new ModuleFederationPlugin(mfConfig)]);
    },
  },
});
