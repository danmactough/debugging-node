var debug = require('debug')('bullshit:parser');

module.exports = function parser (bs) {

  debug('got bullshit', '\n', bs);

  if (bs && 'string' === typeof bs && bs.trim().length) {
    bs = bs.trim().toUpperCase();
  }
  return bs;
};
