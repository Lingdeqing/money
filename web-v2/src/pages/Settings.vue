<template>
    <div class="page-settings">
      <mt-header class="page-header" title="设置计划">
        <mt-button icon="back" slot="left" @click="goHome"></mt-button>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <div class="page-body">
        <div class="page-part">
          <mt-field label="起投日期" placeholder="起投日期" type="date" v-model="plan.start"></mt-field>
          <mt-field label="每期投入额" placeholder="每期投入额" type="number" v-model="plan.piece"></mt-field>
          <mt-field label="手续费" placeholder="手续费" type="number" v-model="plan.rate"></mt-field>
        </div>
        <div class="page-part btn-row">
          <mt-button type="primary" @click="save" size="large">保存</mt-button>
        </div>
      </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import {mapActions, mapState} from 'vuex';

export default {
    data(){
        return  {
          plan: {
            start: '',
            piece: '',
            rate: ''
          }
        }
    },
    mounted(){
      this.getPlan()
      .then(plan => {
        if(plan){
          this.plan = {
            ...plan,
            start: (new Date(plan.start)).format('yyyy-MM-dd')
          };
        } else {
          console.log('第一次使用');
        }
      })
      .catch(e => {
        this.$toast({
          message: '请求出错:'+e.toString()
        })
      })
    },
    methods: {
      ...mapActions(['getPlan', 'setPlan']),
      goHome(){
        this.$router.push('/')
      },
      async save(){
        // rate
        // 验证
        const start = (new Date(this.plan.start)).getTime();
        if(Number.isNaN(start)){
          return this.$toast('必须填写起投日期');
        }
        const piece = Number(this.plan.piece);
        if(Number.isNaN(piece) || piece <= 0){
          return this.$toast('每期投入额必须是大于0的整数');
        }
        console.log(this.plan.rate)
        const rate = Number(this.plan.rate);
        if(Number.isNaN(rate) || rate <= 0){
          return this.$toast('手续费必须是大于0的数字');
        }
        const newPlan = {
          start,
          piece,
          rate,
          createTime: Date.now()
        };

        // console.log(newPlan)
        this.$indicator.open();
        const {code} = await this.setPlan(newPlan);
        this.$indicator.close();
        if(code !== 0){
          this.$toast('出错了: '+code)
        } else {
          this.$toast({
            message: '创建计划成功'
          })
          this.goHome();
        }
      },
    }
}
</script>

<style scoped>
.page-part{
  margin:15px 0;
}
.btn-row{
  margin: 0 20px;
}
</style>
