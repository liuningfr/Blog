const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const bodyParser = require('koa-bodyparser');

app.use(bodyParser());

router.get('/list', ctx => {
  ctx.body = ctx.request.body;
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
