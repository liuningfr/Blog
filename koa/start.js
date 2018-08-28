const Koa = require('koa');
const Router = require('koa-router');
const KoaBody = require('koa-body');
const Mysql = require('mysql');

const app = new Koa();
const router = new Router();

const connection = Mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'avril1993',
  database: 'blog',
});

connection.connect();

let data = null;
connection.query('select * from articles', (error, results) => {
  if (error) throw error;
  data = results;
});

router
  .get('/list', ctx => {
    ctx.body = data;
  })
  .post('/getdetail', ctx => {
    console.log(ctx.request.body);
  });

connection.end();

app.use(KoaBody());
app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3000);
