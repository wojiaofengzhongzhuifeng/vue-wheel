import chai from "chai";

const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'
import sinon from "sinon";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    it('可以设置 disabled.', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                disabled: 'true'
            }
        }).$mount()
        const input = vm.$el.querySelector('input')
        let text = input.getAttribute("disabled")
        expect(text).to.equal('disabled')
        vm.$destroy()
    })
    it('可以传入一个 icon 对象, 展示icon信息', () => {
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
    })
})
