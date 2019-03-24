<template>
    <span class="switchable-input" :style="style">
        <el-input ref="input" v-if="state === 'input'" size="mini" v-model="text" @blur="switchTo('text')" @change="$emit('change', text)"></el-input>
        <span v-else @click="switchTo('input')" class="text">{{text}}</span>
    </span>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        },
        width: {
            type: Number,
            default: -1
        }
    },
    data(){
        return {
            state: 'text',
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
        },
        style(){
            return {
                width: this.width === -1 ? 'auto' : `${this.width}px`
            }
        }
    },
    methods: {
        switchTo(state){
            this.state = state;
            if(this.state == 'input'){
                this.$nextTick(() => {
                    this.$refs.input.focus();
                })
            }
        },
    }
}
</script>

<style>
.switchable-input{
    display: inline-block;
    vertical-align: top;
}
.switchable-input .el-input__inner{padding: 0 8px;}
.switchable-input  .text{vertical-align: top; display: inline-block;max-width: 100%;padding: 0 9px;text-align: center;  line-height: 28px;min-height: 28px; font-size: 12px; color: #606266;}
</style>


