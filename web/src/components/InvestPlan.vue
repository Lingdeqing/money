<template>
  <div>
    <!-- 第一次 -->
    <template v-if="createPlanVisible">
      <el-alert
        v-if="first"
        title="第一次使用，请先创建第一个定投计划"
        type="info"
        :closable="false"
        style="margin-bottom: 10px;">
      </el-alert>

      <!-- 创建 -->
      <el-form label-width="90px">
        <el-form-item label="起投日期">
          <el-date-picker
            v-model="form.start"
            type="date"
            placeholder="选择日期"
            value-format="timestamp"
            >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="每期投入额">
          <el-input v-model="form.piece">
            <template slot="prepend">￥</template>
          </el-input>
        </el-form-item>
        <el-form-item label="手续费">
          <el-input v-model="form.rate">
            <template slot="append">%</template>
          </el-input>
        </el-form-item>
        
        <el-form-item>
          <el-button @click="isChangePlanView = false">取消</el-button>
          <el-button type="primary" @click="createPlan">创建计划</el-button>
        </el-form-item>
      </el-form>
    </template>

    <div v-else class="plan-container">
      <el-card class="control-panel" style="" shadow="none">
        <div slot="header" class="clearfix">
          <span>当前计划</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="changePlan">修改计划</el-button>
        </div>
        <el-form label-width="90px" size="mini">
          <el-form-item label="起投日期">{{currentPlan.start|day}}</el-form-item>
          <el-form-item label="每期投入额">￥{{currentPlan.piece}}</el-form-item>
          <el-form-item label="手续费">{{currentPlan.rate}}%</el-form-item>
        </el-form>
        
      </el-card>

      <!-- 定投计划执行表 -->
      <el-table
        :data="tableData"
        border
        stripe
        class="plan-table"
        @cell-click="handleCellClick"
        @header-click="handleHeadClick"
        >
        <el-table-column
          prop="date"
          label="日期"
          width="95">
          <template slot="header">
            <TheadDatePicker ref="startSetter" v-model="start">日期</TheadDatePicker>
          </template>
          <template slot-scope="{row}">{{row.date|day}}</template>
        </el-table-column>
        <el-table-column
          prop="target"
          label="目标"
          width="80">
        </el-table-column>
        <el-table-column
          prop="assets"
          label="当前资产"
          width="80">
          <template slot-scope="{row}">
            <SwitchableInput v-model="row.assets" :width="60" @change="saveInvest(row)"/>
          </template>
        </el-table-column>
        <el-table-column
          prop="pay"
          label="实购金额"
          width="80">
          <template slot-scope="{row}">
            <SwitchableInput v-model="row.pay"  :width="60" @change="saveInvest(row)"/>
          </template>
        </el-table-column>
      </el-table>

    </div>



    <!-- 底部tab切换 -->
    
  </div>
</template>

<script>
import axios from 'axios';
import SwitchableInput from "./SwitchableInput";
import TheadDatePicker from "./TheadDatePicker";
// const db  = {
//   current: 0, // 当前计划
//   plans: [{ // 创建的计划
//     createTime: 21545,
//     
//       start: '',
//       piece: 400,
//       rate: 0.12
//    
//   }],
//   history: [  // 投资历史
//   {
//     date: 54512,
//     pay: 4545,
//     target: 400,
//     assets: 0
//   }
//   ]
// }

const API = `http://localhost:3000/plans/`;
// 接口1 获取页面初始化数据
async function getInitData(data){
  return (await axios.post(`${API}getInitData`, data)).data;
}

// 接口2 新建计划
async function createPlan(data){
  return (await axios.post(`${API}createPlan`, data)).data;
}

// 接口3 保存一次投资记录
async function saveInvest(data){
  return (await axios.post(`${API}saveInvest`, data)).data;
}

export default {
  components: {
    SwitchableInput,
    TheadDatePicker
  },
  data(){
    return {
      start: '',
      first: false,
      isChangePlanView: false,
      form: {
        start: Date.now(),
        piece: 400,
        rate: 0.15
      },
      currentPlan: {
        start: Date.now(),
        piece: 400,
        rate: 0.15
      },
      tableData: []
    }
  },
  computed: {
    createPlanVisible(){
      return this.first || this.isChangePlanView;
    }
  },
  watch: {
    start(){
      this.getInitData();
    },
    createPlanVisible: {
      immediate: true,
      handler(){
        if(this.first){
          this.form = {
            start: Date.now(),
            piece: 400,
            rate: 0.15
          }
        } else if(this.isChangePlanView){
          this.form = {
            ...this.currentPlan
          } 
        }
      }
    }
  },
  async mounted(){
    
    // const db = {
    //   current: -1,
    // }

    // 显示10条记录 
    // 内容默认显示前6次的历史

    // 可以点击日期查看之前的历史

    this.getInitData();
    
  },
  methods: {
    handleHeadClick(row){
      if(row.label === '日期'){
        this.$refs.startSetter.open();
      }
    },
    handleCellClick(row, column, cell){
      const text = cell.querySelector('.text');
      text && text.click();
    },
    async saveInvest(row){
      // 保存后台
      // 验证
      const pay = Number(row.pay);
      if(Number.isNaN(pay)){
        return this.$message.error('实购金额必须是数字');
      }

      const assets = Number(row.assets);
      if(Number.isNaN(assets)){
        return this.$message.error('当前资产必须是数字');
      }

      const {code} = await saveInvest({
        ...row,
        pay,
        assets
      });
      if(code !== 0){
        this.$message.error('出错了: '+code)
      } else if(row.pay !== '' && row.assets !== '') {
        this.$message.success('编辑成功')
      }
    },
    async createPlan(){
      // 保存后台
      // 验证
      if(!this.form.start){
        return this.$message.error('必须填写起投日期');
      }
      const piece = Number(this.form.piece);
      if(Number.isNaN(piece) || piece <= 0){
        return this.$message.error('每期投入额必须是大于0的整数');
      }
      const rate = Number(this.form.rate);
      if(Number.isNaN(rate) || rate < 0){
        return this.$message.error('手续费必须是不小于0的数字');
      }

      const newPlan = {
        start: this.form.start,
        piece,
        rate,
        createTime: Date.now()
      };
      const {code} = await createPlan(newPlan);
      if(code !== 0){
        this.$message.error('出错了: '+code)
      } else {
        await this.getInitData();
        this.currentPlan = newPlan;
        this.first = false;
        this.isChangePlanView = false;
        this.$message.success('创建计划成功')
      }
    },
    changePlan(){
      this.isChangePlanView = true;
    },
    async getInitData(){
      const db = await getInitData({
        start: this.start
      });

      if(!db.plan){ // 没有则新建
        this.first = true;
      } else {  // 取之前的数据
        this.first = false;
        this.currentPlan = db.plan;
        this.tableData = db.history;
      }
    }
  },
  filters: {
    day(val){
      return new Date(val).format('yyyy-MM-dd')
    }
  }
}

Date.prototype.format = function(format) {
  const zeros = ["", "0", "00", "000", "0000"];
  const c = {
    "Y+": this.getFullYear(),
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S+": this.getMilliseconds()
  };
  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      `${this.getFullYear()}`.substr(4 - RegExp.$1.length)
    );
  }
  for (const k in c) {
    if (new RegExp(`(${k})`).test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1
          ? c[k]
          : (zeros[RegExp.$1.length] + c[k]).substr(`${c[k]}`.length)
      );
    }
  }
  return format;
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .el-form{margin: auto; max-width: 225px;} */
.el-form-item--mini.el-form-item{margin-bottom: 0;}
.el-date-editor.el-input{width: 100%;}
.el-input-group__append, .el-input-group__prepend{padding: 0 10px;}
.el-table .el-input{width: 100px;}


</style>
<style>
.plan-container{
  display:flex;flex-direction: row;flex-wrap: wrap;justify-content: center;
}
.el-table.plan-table{
  min-width:336px;margin-bottom: 10px;margin-right:15px; width: auto;flex:0 1 auto;order: -1;
}
.control-panel{
  min-width: 260px;margin-bottom: 10px;margin-right: 15px;width: auto;flex:0 1 auto;height: 174px;
}
.control-panel .el-card__header {
    padding: 11px 20px;
    line-height: 25px;
}


@media (max-width: 710px) {
  .control-panel{
    margin-left: 0 !important;
    flex: 1;
  }
  .el-table.plan-table{}
}
body{
  display: flex;
  justify-content: center;
}
</style>

