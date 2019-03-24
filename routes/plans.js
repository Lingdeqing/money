const Router = require('koa-better-router');

const router = Router({prefix: '/plans'}).loadMethods();

router.post('/get', (ctx, next) => {
  ctx.body = {
    current: 0,
    plans: [{ // 创建的计划
      createTime: 1553331175270,
      config: {
        start: 1553331175270,
        piece: 400,
        rate: 0.12
      },
    }],
    history: []
  };
});

router.post('/create', (ctx, next) => {
  ctx.body = 'create';
});

router.post('/save', (ctx, next) => {
  ctx.body = 'save';
});

module.exports = router;
