<template>
    <div class="w-nav-sub">
        <!--4slot1: 定义-->
        <span  @click="togglePopover" :class="{ffff: active}">
            <slot name="title"></slot>
            <w-icon icon-name="right" v-if="iconVisible"></w-icon>
        </span>
        <!--6区别1 v-if 与 v-show 替换-->
        <div class="w-nav-sub-popover" v-show="visible">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Icon from "../icon"
    export default {
        inject:["root"],
        computed:{
            iconVisible(){
                if(this.$parent.$options.name === "WheelNav"){
                    return false
                } else {
                    return true
                }
            },
        },
        components:{
            "w-icon": Icon,
        },
        props:{
            name:{
                type: String,
                name: String,
            }
        },
        name: "WheelNavSub",
        data(){
            return {
                visible: false,
                active: false,
            }
        },
        methods:{
            togglePopover(){
                this.visible = !this.visible
            },
            // 8子组件1： 父组件定义方法
            updateNamePath(){
                console.log("updateNamePath");
                // this.active = true;
                // this.root.namePath.unshift(this.name)
                this.$parent.updateNamePath && this.$parent.updateNamePath()
                this.root.namePath.push(this.name)
            },

        }
    }
</script>

<style lang="scss">
    @import "../../styles/var";

    .w-nav-sub {
        position: relative;
        padding:10px 20px;
        &.active {
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                border-bottom: 3px solid $font-color-active;
                width: 100%;
            }
        }
        &-label { padding: 10px 20px; display: block; }
        &-icon { display: none; }
        &-popover {
            background: white;
            position: absolute;
            top: 100%;
            left: 0;
            margin-top: 11px;
            white-space: nowrap;
            box-shadow: 0 0 3px fade_out(black, 0.8);
            border-radius: $border-radius;
            font-size: $font-size;
            min-width: 8em;
            color: black;
            .w-nav-item.active{
                background: $backgroud-light;
                &::after{
                    border-bottom: 0;
                }
            }
            .w-nav-sub{
                padding:10px 20px;
                .w-nav-item.active::after{
                }
            }
        }
    }
    .w-nav-sub .w-nav-sub {
        &.active {
            &::after {
                display: none;
            }
        }
        .w-nav-sub-popover {
            top: 0;
            left: 100%;
            margin-left: 8px;
        }
        .w-nav-sub-label {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .w-nav-sub-icon {
            transition: transform 250ms;
            display: inline-flex; margin-left: 1em;
            svg {fill: $backgroud-light;}
            &.open {
                transform: rotate(180deg);
            }
        }
    }

</style>
