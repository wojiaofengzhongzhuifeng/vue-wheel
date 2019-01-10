<template>
    <div class="tabHead">
        <slot></slot>
        <div class="line" ref="line">

        </div>
    </div>
</template>

<script>
export default {
    name: "wheelTabHead",
    inject:["eventBus"],
    mounted() {
        setTimeout(()=>{
            // 拿到tab组件距离视口left的数据， 不然 line 位置会错
            const tabLeft = this.$parent.tabLeft;

            // 初始状态
            this.eventBus.$on("toSon", (selectTab)=>{
                this.$children.forEach((vm)=>{
                    if(vm.name === selectTab){
                        this.addLinkStyle(vm.$el, tabLeft)
                    }
                })
            });


            this.eventBus.$on("toParent", (selectTab, el)=>{
                this.addLinkStyle(el, tabLeft)
            })
        }, 0)
    },
    methods:{
        addLinkStyle(el, tabLeft){
            const {width, left} = el.getBoundingClientRect();
            this.$refs.line.style.left = (left - tabLeft) + "px";
            this.$refs.line.style.width = width + "px";
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../styles/var";
    .tabHead{
        border-bottom:1px solid $border-color;
        display: flex;
        position: relative;
        .line{
            position: absolute;
            border:1px solid #1890ff;
            bottom: 0;
            transition: all 0.3s;
        }
    }
</style>
