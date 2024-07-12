const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "facility",
  filename: "remoteEntry.js",
  exposes: {
    "./facility-module":
      "./projects/facility/src/app/remote-entry/remote-entry.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
