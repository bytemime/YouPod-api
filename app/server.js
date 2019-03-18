const app = require('./index');
const PORT = process.env.PORT || 8080;
const IP = process.env.IP;

app.listen(PORT, IP);
