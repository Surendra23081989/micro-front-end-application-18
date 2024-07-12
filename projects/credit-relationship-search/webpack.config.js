const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    "credit-approvals": "http://localhost:4201/remoteEntry.js",
    customer: "http://localhost:4202/remoteEntry.js",
    facility: "http://localhost:4203/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
