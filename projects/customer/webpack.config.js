const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "customer",
  filename: "remoteEntry.js",
  exposes: {
    "./customer-module":
      "./projects/customer/src/app/remote-entry/remote-entry.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
