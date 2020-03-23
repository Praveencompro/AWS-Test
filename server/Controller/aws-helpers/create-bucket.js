var AWS = require("aws-sdk");
var config = require("./../../config");


module.exports = function CreateBucket(req, res) {
    console.log('create-bucket called.');
    res.send("create-bucket called.");
    s3 = new AWS.S3();

    let bucketParams = {
        Bucket: config.aws.bucketName
    };

    s3.createBucket(bucketParams, function (err, data) {
        if (err) {
            res.send("Error", err);
        } else {
            res.send("Success", data.Location);
        }
    });
}