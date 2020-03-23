var AWS = require("aws-sdk");
var config = require("./../../config");

module.exports = function DeleteBucket(req, res) {
  console.log("delete-bucket called.");
  s3 = new AWS.S3();

  var params = {
    Bucket: config.aws.bucketName
  };

  s3.deleteBucket(params, function(err, data) {
    if (err) {
      res.send("Error", err);
    } else {
      res.send("Success", data);
    }
  });
};
