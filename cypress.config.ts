import { defineConfig } from "cypress";
import webpack from "@cypress/webpack-preprocessor";
import path from "path";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const options = {
        webpackOptions: {
          resolve: {
            extensions: [".ts"],
            alias: {
              "@": path.resolve(__dirname, "src"),
            },
          },
          module: {
            rules: [
              {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: { transpileOnly: true },
              },
            ],
          },
        },
        watchOptions: {},
      };
      on("file:preprocessor", webpack(options));
      return config;
    },
    baseUrl: "http://localhost:3000",
  },
});
