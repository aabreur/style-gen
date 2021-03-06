const app = require('./server');
const config = require('./config');

var bole = require('bole');

bole.output({level: 'debug', stream: process.stdout});
var log = bole('server');

log.info('server starting');

app.listen(config.express.port, config.express.ip, function (error) {
  if (error) {
    log.error('Unable to listen for connections', error);
    process.exit(10);
  }
  log.info('express is listening on http://' +
    config.express.ip + ':' + config.express.port);
})