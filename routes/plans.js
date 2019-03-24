const Router = require('koa-better-router');
const fs = require('fs-extra');

const router = Router({ prefix: '/plans' }).loadMethods();

const dbPath = './db/plans.json';

function saveDb(db) {
  return fs.outputJSON(dbPath, db, {
    spaces: 2
  });
}
function isSameWeek(t1, t2) {
  var oneDayTime = 1000 * 60 * 60 * 24;
  var old_count = parseInt(t1 / oneDayTime);
  var now_other = parseInt(t2 / oneDayTime);
  return parseInt((old_count + 4) / 7) == parseInt((now_other + 4) / 7);
}
// 获取同一个周几
function getWeekSameDay(t1, t2) {
  var d1 = new Date(t1).getDay(), d2 = new Date(t2).getDay();
  return t2 + (d1 - d2) * 1000 * 60 * 60 * 24;
}
router.post('/getInitData', async (ctx, next) => {
  const db = await fs.readJSON(dbPath);
  if (db.current === -1) {
    ctx.body = {
      plan: null
    };
  } else {
    const plan = db.plans[db.current];
    const params = ctx.request.body;
    const start = params.start || (Date.now() - 5 * 7 * 24 * 60 * 60 * 1000);
    console.log(new Date(start));
    const startIndex = db.history.find(invest => {
      return isSameWeek(invest.date, start);
    })
    const history = db.history.slice(startIndex, startIndex + 10);
    const len = history.length;
    let lastDate = len > 0 ? history[len - 1].date : getWeekSameDay(plan.start, start);
    const lastTarget = len > 0 ? history[len - 1].target : 0;

    for (let i = 0; i < 10 - len; i++) {
      history.push({
        date: lastDate + i * 7 * 24 * 60 * 60 * 1000,
        target: lastTarget + plan.piece * (1 + i),
        assets: '',
        pay: ''
      })
    }

    ctx.body = {
      plan,
      history
    }
  }

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

router.post('/createPlan', async (ctx, next) => {
  const newPlan = ctx.request.body;
  const db = await fs.readJSON(dbPath);
  db.plans.push(newPlan);
  db.current = db.plans.length - 1;
  await saveDb(db);
  ctx.body = {
    code: 0
  }
});

router.post('/saveInvest', async (ctx, next) => {
  const invest = ctx.request.body;
  const db = await fs.readJSON(dbPath);
  db.history.push(invest);
  await saveDb(db);
  ctx.body = {
    code: 0
  };
});

module.exports = router;
