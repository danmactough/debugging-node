var file = require('path').resolve(__filename);

var readFile = new Promise(function (resolve, reject) {
  require('fs').readFile(file, 'utf-8', function cb (ಠ_ಠ, contents) {
    if (ಠ_ಠ) reject(ಠ_ಠ);
    else resolve(contents);
  });
});

readFile
  .then(function (contents) {
    console.log(contents);
  })
  .catch(function (ಠ_ಠ) {
    throw ಠ_ಠ;
  });
