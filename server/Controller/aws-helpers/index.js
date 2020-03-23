var createBucket = require("./create-bucket");
var addObject = require("./add-object");
var listBuckets = require("./list-buckets");
var listObjects = require("./list-objects");
var deleteBucket = require("./delete-bucket");

module.exports = {
  createBucket,
  addObject,
  listBuckets,
  listObjects,
  deleteBucket
};