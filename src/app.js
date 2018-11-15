// 所有组件的入口
import Vue from "vue"
import Button from "./button.vue"
import Icon from "./icon"
import ButtonGroup from "./button-group"


Vue.component("w-button", Button)
Vue.component("w-icon", Icon)
Vue.component("w-group", ButtonGroup)

new Vue({
    el: "#app",
    data: {
        loading1: false
    }
})


// 单元测试
import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)

const expect = chai.expect
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            iconName: 'setting'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-setting')
    vm.$el.remove()
    vm.$destroy()
}

