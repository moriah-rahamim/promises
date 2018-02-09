/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      callback(error);
      return;
    }
    let firstLine = data.toString().split('\n')[0]; // data is a buffer
    callback(error, firstLine);
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request(url, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }
    callback(error, response.statusCode);
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
