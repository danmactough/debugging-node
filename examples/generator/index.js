var co = require('co');
var thunkify = require('thunkify');
var readFile = thunkify(require('fs').readFile);
var file = require('path').resolve(__filename);

co(function* () {
  try {
    var contents = yield readFile(file, 'utf-8');
  }
  catch (ಠ_ಠ) {
    throw ಠ_ಠ;
  }
  console.log(contents);
});
