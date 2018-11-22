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
    }
})


// 单元测试
import chai from 'chai'
import spies from 'chai-spies'
import sinon from "sinon"

chai.use(spies)

const expect = chai.expect
// 测试 iconName 属性
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
// 测试 iconPosition 属性right
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            iconName: 'setting',
            iconPosition: "right",
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('.icon')
    let className = useElement.getAttribute('class')
    expect(className).to.eq('icon right')
    vm.$el.remove()
    vm.$destroy()
}
// 测试 iconPosition 属性 left
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            iconName: 'setting',
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('.icon')
    let className = useElement.getAttribute('class')
    expect(className).to.eq('icon left')
    vm.$el.remove()
    vm.$destroy()
}
// 测试 loading 属性
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            loading: true,
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let link = useElement.getAttribute('xlink:href')
    expect(link).to.eq('#icon-loading')
    vm.$el.remove()
    vm.$destroy()
}
// 测试点击
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            iconName: "setting"
        }
    })
    vm.$mount()

    const callback = sinon.fake();
    let button = vm.$el.querySelector('button')
    console.log(button);
    button.addEventListener('click', callback)
    button.click()
    expect(callback).to.have.been.called
}

