var AWS = require("aws-sdk");
var express = require("express");
var app = express();
var config = require('./config');

app.use(require("./routes"));

AWS.config.update({ "accessKeyId": config.aws.accessid, "secretAccessKey": config.aws.secretkey, region: "ap-south-1" });

app.listen(4000, () => {
    console.log("Server running on port 3000");
});
