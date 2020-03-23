var fs = require("fs");
var AWS = require("aws-sdk");
var path = require("path");
var config = require("./../../config");

module.exports = function AddObject(req, res) {
  console.log("AddObject called.");
  s3 = new AWS.S3();

  var file = "./server/assets/img/sample.jpg";

  var fileStream = fs.createReadStream(file);
  fileStream.on("error", function(err) {
    console.log("File Error", err);
  });

  let uploadParams = {
    Bucket: config.aws.bucketName,
    Body: fileStream,
    Key: path.basename(file)
  };

  s3.upload(uploadParams, function(err, data) {
    if (err) {
      res.send("Error", err);
    }
    if (data) {
      res.send("200", data.Location);
    }
  });
};
