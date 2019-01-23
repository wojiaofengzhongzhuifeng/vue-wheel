<template>
    <!--8class2：通过computed计算得出-->
    <div class="w-nav-sub" :class="activeBorderBottom" v-click-out-side="close">
        <!--4slot1: 定义-->
        <span  @click="togglePopover" :class="{ffff: active}">
            <slot name="title"></slot>
            <!--8class1：通过data或者props的数据（boolean类型）确定有没有 "expanded" 类名-->
            <w-icon icon-name="right" v-if="iconVisible" :class="{expanded}"></w-icon>
        </span>
        <transition @enter="enter">
            <!--6区别1 v-if 与 v-show 替换-->
            <div class="w-nav-sub-popover" v-show="visible" :class="{vertical}">
                <slot></slot>
            </div>
        </transition>

    </div>
</template>

<script>
    import ClickOutSide from "../clickoutSide"
    import Icon from "../icon"
    export default {
        directives:{
            ClickOutSide
        },
        inject:["root", "vertical"],
        computed:{
            iconVisible(){
                if(this.$parent.$options.name === "WheelNav"){
                    return false
                } else {
                    return true
                }
            },
            activeBorderBottom(){
                if(this.root.namePath.indexOf(this.name) >= 0){
                    return "active"
                } else {
                    return ""
                }
            }
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
                expanded: false,
            }
        },
        methods:{
            togglePopover(){
                this.visible = !this.visible
                this.expanded = !this.expanded
            },
            // 8子组件1： 父组件定义方法
            updateNamePath(){
                this.$parent.updateNamePath && this.$parent.updateNamePath()
                this.root.namePath.push(this.name)
            },
            close(){
                console.log("close");
                this.visible = false
            },
            enter (el, done) {
                console.log("enter");
                let {height} = el.getBoundingClientRect()
                el.style.height = 0
                el.getBoundingClientRect()
                el.style.height = `${height}px`
                el.addEventListener('transitionend', () => {
                    done()
                })
            },
            afterEnter (el) {
                console.log(el);
                console.log("afterenter");
                el.color = "red"
                el.style.height = 'auto'
            },
            leave: function (el, done) {
                console.log("leave");
                let {height} = el.getBoundingClientRect()
                el.style.height = `${height}px`
                el.getBoundingClientRect()
                el.style.height = 0
                el.addEventListener('transitionend', () => {
                    done()
                })
            },
            afterLeave: function (el) {
                console.log("afterleave");
                el.style.height = 'auto'
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
            transition: height 250ms;
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
            &.vertical{
                position: static;
                box-shadow: none ;
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

    .w-icon.expanded    {
        transform: rotate(90deg);
        transition: all 0.3s;
    }
</style>
