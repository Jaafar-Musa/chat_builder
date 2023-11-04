/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/**
 * @type {import("next").NextConfig}
 */
import MonacoWebpackPlugin from "monaco-editor-webpack-plugin";
const monacoRules = [
  {
    test: /\.ttf$/,
    type: 'asset/resource'
  }
]
const config = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(new MonacoWebpackPlugin({
        languages: ["typescript", "yaml"],
        filename: "static/[name].worker.js",

      }));
      config.module.rules.push(...monacoRules)
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return config;
  },
  reactStrictMode: true,
};

export default config;