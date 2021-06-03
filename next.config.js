const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
});

module.exports = withMDX({
  future: {
    webpack5: true,
  },
  basePath: "",
  pageExtensions: ["js", "jsx", "mdx"],
});
