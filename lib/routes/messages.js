const Router = require('koa-router');
const router = new Router();
const Message = require('../models/message');
const bodyParser = require('koa-bodyparser')();

router
  .get('/messages', async (ctx, next) => {
    ctx.body = await Message.find();
  })
  .post('/messages', bodyParser, async (ctx, next) => {
    ctx.body = await new Message(ctx.request.body).save();
  });

module.exports = router;