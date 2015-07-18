import koa from 'koa';

const app = koa();

app.use(function *logger(next) {
  const start = new Date();
  yield next;
  const ms = new Date() - start;
  console.log('%s %s %s - %s', this.method, this.url, this.ip, ms);
});

app.use(function *handler() {
  this.response.redirect(process.env.NEW_BASE_URL);
});

const port = process.env.PORT || 5000;
app.listen(port);
