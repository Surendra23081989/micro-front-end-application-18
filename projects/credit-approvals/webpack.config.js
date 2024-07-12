const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "credit-approvals",
  filename: "remoteEntry.js",
  exposes: {
    "./credit-approvals-module":
      "./projects/credit-approvals/src/app/remote-entry/remote-entry.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
