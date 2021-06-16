const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  target: "serverless",
  resolve: {
    fallback: {
      fs: false,
    },
  },
};
