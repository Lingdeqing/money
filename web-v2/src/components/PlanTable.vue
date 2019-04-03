<template>
    <div class="plan-table">
        <table class="thead">
            <thead>
                <tr>
                    <th class="date">日期</th>
                    <th class="target">目标</th>
                    <th class="assets">当前资产</th>
                    <th class="pay">实购金额</th>
                </tr>
            </thead>
        </table>
        <table
            class="tbody"
        >
            <tbody>
                <tr  v-for="(item, index) in list" :key="index">
                    <td class="date">{{item.date|day}}</td>
                    <td class="target">{{item.target}}</td>
                    <td class="assets link">
                        <ClickableInput v-model="item.assets" placeholder="录入" @change="setInvest(item)"/>
                    </td>
                    <td class="pay link">
                        <ClickableInput v-model="item.pay" placeholder="买入" @change="setInvest(item)"/>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template> 

<script>
import { listInvest, saveInvest } from "@/io";
import ClickableInput from "@/components/ClickableInput";
export default {
    components: {
        ClickableInput,
    },
    data(){
        return {
            loading: false,
            list: []
        }
    },
    mounted(){
        // 显示10条记录 
        // 内容默认显示前6次的历史
        // 可以点击日期查看之前的历史
        this.getInitData();
    },
    methods: {
        async getInitData(){
            const {code, data} = await listInvest();
            if(code === 0 && data){
                this.list = data;
            }
        },
        async setInvest(item){
            const {code} = await saveInvest(item);
            if(code === 0){
                this.$toast({
                    message: '设置成功'
                })
            }
        }
    }
}
</script>

<style lang="less" scoped>
.plan-table{
    table{
        width: 100%;
    }
    td, th{
        text-align: center;
        line-height: 30px;
        font-weight: normal;
        padding: 0 5px;
    }
    .thead{
        background: #f1f1f1;
        th{
            height: 30px;
            color: #949494;
        }
    }
    .tbody{

    }
    td{
        color: #000;
    }
    .date{
        width: 90px;
    }
    .target, .assets, .pay{
        width: 70px;
    }
}
</style>

