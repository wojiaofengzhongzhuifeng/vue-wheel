import chai from "chai";

const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button'
import sinon from "sinon";

Vue.config.productionTip = false
Vue.config.devtools = false



describe('Button', () => {
    it('存在.', () => {
        expect(Button).to.be.ok
    })
    it('可以设置icon.', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                iconName: 'setting'
            }
        }).$mount()
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#icon-setting')
        vm.$destroy()
    })
    it('可以设置loading.', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                loading: true,
            }
        })
        vm.$mount()
        let use = vm.$el.querySelector('use')
        let link = use.getAttribute('xlink:href')
        expect(link).to.eq('#icon-loading')
        vm.$el.remove()
        vm.$destroy()
    })
    it('icon 默认的位置是左边', () => {
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
    })
    it('设置 iconPosition 可以改变 order', () => {
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
    })
    it('点击 button 触发 click 事件', () => {
        // const Constructor = Vue.extend(Button)
        // const vm = new Constructor({
        //     propsData: {
        //         iconName: 'setting',
        //     }
        // }).$mount()
        //
        // const callback = sinon.fake();
        // vm.$on('click', callback)
        // vm.$el.click()
        // expect(callback).to.have.been.called
    })
})
