var Koa = new require('koa')
  , app = new Koa()
  , logger = require('koa-logger')
  , views = require('koa-views')
  , onerror = require('koa-onerror')
  , cors = require('@koa/cors');

var index = require('./routes/index');
var users = require('./routes/users');
var plans = require('./routes/plans');

// error handler
onerror(app);

// global middlewares
app.use(cors());
app.use(views('views', {
  root: __dirname + '/views',
  extension: 'jade',
}));
app.use(require('koa-body')());
app.use(logger());

app.use(async (ctx, next) => {
  var start = new Date;
  await next()
  var ms = new Date - start;
  console.log('%s %s - %s', ctx.method, ctx.url, ms);
});

// static
app.use(require('koa-static')(__dirname + '/public'));

// routes definition
app.use(index.middleware());
app.use(users.middleware());
app.use(plans.middleware());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app;
