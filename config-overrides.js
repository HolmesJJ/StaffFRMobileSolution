const { override, fixBabelImports } = require("customize-cra");

module.exports = override(
  fixBabelImports("import-antd-mobile", {
    libraryName: "antd-mobile",
    style: "css"
  }),
  fixBabelImports("import-antd", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  })
);
