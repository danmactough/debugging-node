var debug = require('debug')('bullshit');
var bsGenerator = require('faker2').Company.bs;
var parser = require('./parser');

debug('starting bullshitter')
poll();
var timer = setInterval(poll, 1000);

debug('attaching SIGINT handler');
process.on('SIGINT', function sigintHandler () {
  debug('caught SIGINT');
  debug('stopping bullshitter');
  clearInterval(timer);
  process.exit(0);
});

function poll () {
  var debug = require('debug')('bullshit:poll');
  var bs = bsGenerator();
  debug('sending bullshit to parser');
  var result = parser(bs);
  debug('parser returned bullshit', '\n', result);
}
