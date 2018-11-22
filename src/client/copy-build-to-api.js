// This script is called on production builds to copy the client app to the server app,
// so the server app can host the client files on the production server.

const ncp = require('ncp');
const path = require('path');

const source = path.resolve('./build');
const dest = path.resolve('../api/build');

ncp(source, dest, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('done!');
});