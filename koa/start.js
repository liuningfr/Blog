const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/list', ctx => {
  ctx.body = [
    {
      title: 'Title 1',
      des: 'Description 1',
    },
    {
      title: 'Title 2',
      des: 'Description 2',
    },
    {
      title: 'Title 3',
      des: 'Description 3',
    },
    {
      title: 'Title 4',
      des: 'Description 4',
    },
  ];
});

app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3000);
