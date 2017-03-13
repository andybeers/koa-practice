const Koa = require('koa');
const app = new Koa();
const morgan = require('koa-morgan');
const messages = require('./routes/messages');

app.use(morgan('dev'));
app.use(messages.routes());

module.exports = app;