const Koa = require('koa');
const app = new Koa();
const logger = require('koa-logger');
const messages = require('./routes/messages');

app.use(logger());
app.use(messages.routes());

// not sure what this does:
// app.use(messages.allowedMethods());

module.exports = app;