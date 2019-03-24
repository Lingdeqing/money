<template>
    <span>
        <span @click.stop="open"><slot /></span>
        <el-date-picker
            ref="datepicker"
            v-model="text"
            type="date"
            placeholder="选择日期"
            value-format="timestamp"
            style="width:0;margin:0;padding:0;height:0;position:relative;left: -25px;"
        >
        </el-date-picker>
    </span>
</template>

<script>
export default {
    props: {
        value: {
            type: [String, Number],
            default: ''
        },
    },
    data(){
        return {
            state: 'text'
        }
    },
    computed: {
        text: {
            get(){
                return this.value;
            },
            set(newVal){
                this.$emit('input', newVal)
            }
        }
    },
    methods: {
        open(){
            this.$refs.datepicker.focus();
        }
    }

}
</script>

