const router = require('koa-router')();

router
  .get('/messages', function *(next) {
    this.body = yield {message: 'yo it me waddup'};
  });


module.exports = router;