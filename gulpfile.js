const {stagingDry} = require("./").get({
  hostname: "example.com",
  destination: "path/to/public_html",
  stagingDir:"/stg/"
});

exports.stagingDry = stagingDry;
