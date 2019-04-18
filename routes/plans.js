const Router = require('koa-better-router');
const fs = require('fs-extra');
const axios = require('axios');

const router = Router({ prefix: '/plans' }).loadMethods();

const dbPath = './db/plans.json';

if(!fs.existsSync(dbPath)){
  saveDb({
    current: -1,
    plans: [],
    history: []
  })
}

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
function isSameDay(t1, t2) {
  const d1 = new Date(t1), d2 = new Date(t2);
  return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
}
function whichWeek(start, t){
  const index = Math.ceil((t - start) / (1000 * 60 * 60 * 24 * 7));
  return index;
}
// 获取同一个周几
function getSameWeekDay(t1, t2) {
  var d1 = new Date(t1).getDay(), d2 = new Date(t2).getDay();
  return t2 + (d1 - d2) * 1000 * 60 * 60 * 24;
}
// 获取下一个投资日
function getNextPlanDay(start){
  const now =  Date.now();
  let next = getSameWeekDay(start, now);
  if(next <= now){
    next = getSameWeekDay(start, now + 1000 * 60 * 60 * 24 * 7);
  }
  return next;
}

// 获取当前的上证指数
async function getSh1(){
  const {data} = await axios.get('http://hq.sinajs.cn/list=s_sh000001');
  return /"(.+)"/.exec(data)[1].split(',')[1];
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
    const history = [];
    const allHistories = db.history.sort((a, b) => {  //  从小到大排序
      return a.date - b.date;
    });
    if(params.start){ // 设定起始日期，从起始日期向后查找10条记录
      allHistories.forEach(item => {
        if(item.date >= params.start && history.length < 10){
          history.push(item);
        }
      });
    } else { // 查找前面5条记录 
      history.push(...allHistories.slice(-5));
    }

    // 如果不够10条　则当前计划　从下一个计划日开始补齐　空白记录
    const nextPlanDate = getNextPlanDay(plan.start);
    const lastTarget = history.length > 0 ? history[history.length - 1].target : 0;
    const len = 10 - history.length;
    for(let i = 0; i < len; i++){
      history.push({
        date: nextPlanDate + i * 7 * 24 * 60 * 60 * 1000,
        target: lastTarget + (1+i) * plan.piece,
        assets: '',
        pay: ''
      })
    }

    ctx.body = {
      plan,
      history
    }
  }
});
async function setPlan(ctx, next){
  const newPlan = ctx.request.body;
  const db = await fs.readJSON(dbPath);
  db.plans.push(newPlan);
  db.current = db.plans.length - 1;
  await saveDb(db);
  ctx.body = {
    code: 0
  }
}
async function getPlan(ctx, next){
  const db = await fs.readJSON(dbPath);
  if(db.current === -1){
    ctx.body = {
      code: 0,
      data: null
    };
  } else {
    ctx.body = {
      code: 0,
      data: db.plans[db.current]
    };
  }
}
router.post('/createPlan', setPlan);
router.post('/setPlan', setPlan);
router.post('/getPlan', getPlan);

router.post('/listInvest', async (ctx, next) => {
  const db = await fs.readJSON(dbPath);
  if (db.current === -1) {
    ctx.body = {
      code: 0,
      data: []
    };
  } else {
    const plan = db.plans[db.current];
    const params = ctx.request.body;
    const history = [];
    const allHistories = db.history.sort((a, b) => {  //  从小到大排序
      return a.date - b.date;
    });
    if(params.start){ // 设定起始日期，从起始日期向后查找10条记录
      allHistories.forEach(item => {
        if(item.date >= params.start && history.length < 10){
          history.push(item);
        }
      });
    } else { // 查找到当天的前面的10条记录
      const oneDay = 1000 * 60 * 60 * 24;
      const today = parseInt(Date.now() / oneDay);
      history.push(...allHistories.filter(item => {
        return parseInt(item.date /oneDay)  <= today;
      }).slice(-10));
    }

    // 如果不够10条　则当前计划　从下一个计划日开始补齐　空白记录
    const nextPlanDate = getNextPlanDay(plan.start);
    const lastTarget = history.length > 0 ? history[history.length - 1].target : 0;
    const len = 10 - history.length;
    for(let i = 0; i < len; i++){
      history.push({
        date: nextPlanDate + i * 7 * 24 * 60 * 60 * 1000,
        target: lastTarget + (1+i) * plan.piece,
        assets: '',
        pay: ''
      })
    }

    // 给当天设定上证指数
    const sh1 = await getSh1();
    const today = Date.now();
    history.forEach(item => {
      if(!item.sh1 && isSameDay(item.date, today)){
        item.sh1 = sh1;
      }
    })

    ctx.body = {
      code: 0,
      data: history,
    }
  }
});

router.post('/saveInvest', async (ctx, next) => {
  const invest = ctx.request.body;
  const db = await fs.readJSON(dbPath);
  let overwrite = false;
  db.history.forEach(item => {
    if(isSameDay(item.date, invest.date)){
      overwrite = true;
      Object.assign(item, invest);
    }
  })
  if(!overwrite){
    db.history.push(invest);
  }
  await saveDb(db);
  ctx.body = {
    code: 0
  };
});

module.exports = router;
