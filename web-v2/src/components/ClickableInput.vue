<template>
    <span class="switchable-input">
        <input ref="input" v-if="state === 'input'" v-model="text" @blur="switchTo('text')" type="number" @change="$emit('change', text)"/>
        <span v-else @click="switchTo('input')">
            <span class="number" v-if="!showPlaceholder">{{text}}</span> 
            <span class="link" v-else>{{placeholder}}</span> 
        </span>
    </span>
</template>

<script>
export default {
    props: {
        value: {
            type: [String, Number],
            default: ''
        },
        placeholder: {
            type: String,
            default: '输入'
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
        showPlaceholder(){
            return this.state === 'text' && !this.value;
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

<style lang="less" scoped>
.switchable-input{
    display: inline-block;
    vertical-align: top;
    width: 60px;
    height: 30px;
    line-height: 30px;

    .link{
        color: #0094cd;
    }

    input{
        vertical-align: top;
        box-sizing: border-box;
        width: 60px;
        height: 30px;
        line-height: 29px;
        border: none;
        border-bottom: 1px solid transparent;
        outline: none;
        border-radius: 0;
        text-align: center;
        font-size: 12px;
        font-weight: normal;

        &:focus{
            border-color: #d9d9d9;
        }
    }
}

</style>


