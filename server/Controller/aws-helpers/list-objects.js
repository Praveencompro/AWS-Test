var AWS = require("aws-sdk");
var config = require("./../../config");

module.exports = function ListObjects(req, res) {
  console.log("list-objects called.");
  s3 = new AWS.S3();

  var params = {
    Bucket: config.aws.bucketName,
    MaxKeys: 10
  };

  s3.listObjects(params, function(err, data) {
    if (err) {
        res.send("Error", err);
    } else {
      res.json(data.Contents);
    }
  });
};
