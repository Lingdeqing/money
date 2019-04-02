<template>
    <div>
    <div v-if="plan">
        <mt-cell title="起投日期" :value="plan.start|day"></mt-cell>
        <mt-cell title="每期投入额" :value="plan.piece"></mt-cell>
        <mt-cell title="手续费" :value="plan.rate"></mt-cell>
    </div>
    <div class="btn-row">
          <mt-button type="primary" @click="setPlan" size="large">修改计划</mt-button>
    </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    computed: {
        ...mapState(['plan'])
    },
    methods: {
        ...mapActions(['getPlan']),
        setPlan(){
            this.$router.push('/settings');
        }
    },
    mounted(){
        this.getPlan();
    }
}
</script>

<style scoped>
.btn-row{
    margin: 10px;
}
</style>


