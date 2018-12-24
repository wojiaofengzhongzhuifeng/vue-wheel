<template>
    <div class="tabItem" @click="xxx" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "wheelTabItem",
        props: {
            disabled: {
                type: Boolean,
                default: false,
            },
            name: {
                type: [String, Number],
                required: true,
            }
        },

        data() {
            return {
                active: {
                    type: Boolean,
                    default: false,
                }
            }
        },

        computed:{
            classes(){
                let className = "";
                if(this.active){
                    className +=  "active"
                } else if(this.active === false){
                    className += "";
                }
                if(this.disabled){
                    className +=  "disabled"
                } else if(this.disabled === false){
                    className += ""
                }
                return className
            },
        },

        // 4组件通信3: 通过inject属性拿到tab组件注入的数据
        inject: ["eventHi"],

        // 4组件通信4: 使用inject的数据
        created() {
            this.eventHi.$on("update:selectedData", (value)=>{
                this.active = this.name ===value
            });
            console.log(this.disabled);
            if(this.disabled){
                console.log(`${this.name}不可以点击`);
            }
        },

        methods: {
            xxx(){
                if(this.disabled){return}
                this.eventHi.$emit("update:selectedData", this.name, this.$el)
            }
        }
    }
</script>

<style lang="scss" scoped>
    $line-height: 40px;
    $font-color: #90a4ae;
    $grey: #666666;
    $color-blue: rgb(66, 133, 244);
    $color-red: rgb(219, 68, 55);
    $color-yellow: rgb(244, 160, 0);
    $color-green: rgb(15, 157, 88);
    .tabItem {
        padding: 0 2em;
        cursor: pointer;
        :hover{
            color: $color-blue;
        }
        &.active {
        }
        &.disabled{
            color: grey;
            cursor: not-allowed;
        }
    }
</style>
