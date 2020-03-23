var express = require("express");
var router = express.Router();
var awsHelpers = require('./Controller/aws-helpers');

// Define the home page route
router.get("/", function(req, res) {
  res.send("home page");
});

router.get("/create-bucket/:bucketname", awsHelpers.createBucket);

router.get("/list-buckets", awsHelpers.listBuckets);

router.get("/list-objects", awsHelpers.listObjects);

router.get("/add-object", awsHelpers.addObject);

router.get("/delete-bucket", awsHelpers.deleteBucket);

module.exports = router;
