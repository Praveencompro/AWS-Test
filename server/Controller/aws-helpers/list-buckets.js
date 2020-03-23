var AWS = require("aws-sdk");


module.exports = function ListBucket(req, res) {
    console.log('list-bucket called.');
    s3 = new AWS.S3();

    s3.listBuckets( function (err, data) {
        if (err) {
            res.send("Error", err);
        } else {
            res.send(data.Buckets);
        }
    });
}