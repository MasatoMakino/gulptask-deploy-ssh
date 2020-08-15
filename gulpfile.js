const {stagingDry} = require("./").get({
  hostname: "example.com",
  username: "example_user",
  destination: "path/to/public_html",
  stagingDir:"/stg/"
});

exports.stagingDry = stagingDry;
