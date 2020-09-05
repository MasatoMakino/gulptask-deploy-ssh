const { stagingDry } = require("./").get({
  host: "example.com",
  destination: "path/to/public_html",
  stagingDir: "/stg/",
});

exports.stagingDry = stagingDry;
