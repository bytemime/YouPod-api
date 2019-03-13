const app = require('./index');
const config = require('./config');

app.listen(config.express.port, config.express.ip);
