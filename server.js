const Koa = require('koa');
const app = new Koa();
const morgan = require('koa-morgan');

app.use(morgan('dev'));

app.use(ctx => {
  ctx.body = 'Hello World!';
});

app.listen(3000);