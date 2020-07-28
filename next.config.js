const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
});

module.exports = withMDX({
  basePath: "",
  pageExtensions: ["js", "jsx", "mdx"],
});
