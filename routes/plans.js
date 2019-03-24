const Router = require('koa-better-router');
const fs = require('fs-extra');

const router = Router({prefix: '/plans'}).loadMethods();

const dbPath = './db/plans.json';

function saveDb(db){
  return fs.outputJSON(dbPath, db, {
    spaces: 2
  });
}
router.post('/getInitData',async (ctx, next) => {
  ctx.body = await fs.readJSON(dbPath);
  // {
  //   current: -1
  //   // current: 0,
  //   // plans: [{ // 创建的计划
  //   //   createTime: 1553331175270,
  //   //   config: {
  //   //     start: 1553331175270,
  //   //     piece: 400,
  //   //     rate: 0.12
  //   //   },
  //   // }],
  //   // history: []
  // };
});

router.post('/createPlan',async (ctx, next) => {
  const newPlan = ctx.request.body;
  const db = await fs.readJSON(dbPath);
  db.plans.push(newPlan);
  db.current = db.plans.length-1;
  await saveDb(db);
  ctx.body = {
    code: 0
  }
});

router.post('/saveInvest',async (ctx, next) => {
  const invest = ctx.request.body;
  const db = await fs.readJSON(dbPath);
  db.history.push(invest);
  await saveDb(db);
  ctx.body = {
    code: 0
  };
});

module.exports = router;
