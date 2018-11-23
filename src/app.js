// 所有组件的入口
import Vue from "vue"
import Button from "./button.vue"
import ButtonGroup from "./button-group"
import Input from "./input"

Vue.component("w-button", Button)
Vue.component("w-group", ButtonGroup)
Vue.component("w-input", Input)

new Vue({
    el: "#app",
    data: {
        loading1: true
    },
    methods: {
        inputChange(e){
            console.log(e.target.value);
        }
    }
})

const Constructor = Vue.extend(Input)
const vm = new Constructor({
    propsData: {
        icon: {iconName: 'setting', iconMsg: '你填错了信息'}
    }
}).$mount()
const use = vm.$el.querySelector('use')
const span = vm.$el.querySelector('span')

let linkText = use.getAttribute("xlink:href")
let spanText = span.innerText

expect(linkText).to.equal('#icon-setting')
expect(spanText).to.equal('你填错了信息')

vm.$destroy()
