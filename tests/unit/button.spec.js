import {expect} from 'chai'
import Button from '../../src/button/button'
import { mount } from '@vue/test-utils'


import Vue from 'vue'


Vue.config.productionTip = false
Vue.config.devtools = false



describe('Button', () => {
    it('存在.', () => {
        expect(Button).to.be.ok
    })
    it('可以设置icon.', () => {
        const wrapper = mount(Button, {
            propsData: {
                iconName: "setting"
            }
        })
        const useElement = wrapper.find('use')
        expect(useElement.attributes()['href']).to.equal('#icon-setting')
    })
    it('可以设置loading.', () => {
        const wrapper = mount(Button, {
            propsData: {
                loading: true
            }
        })
        const useElement = wrapper.find('use')
        expect(useElement.attributes()['href']).to.equal('#icon-loading')
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

    it('icon 默认的位置是左边.', () => {
        const wrapper = mount(Button, {
            propsData: {
                iconName: "setting"
            }
        })
        const useElement = wrapper.find('.icon')
        const classes = useElement.attributes()["class"]
        expect(classes).to.equal("icon left")
    })
    // it('设置 iconPosition 可以改变 order', () => {
    //     const Constructor = Vue.extend(Button)
    //     const vm = new Constructor({
    //         propsData: {
    //             iconName: 'setting',
    //             iconPosition: "right",
    //         }
    //     })
    //     vm.$mount()
    //     let useElement = vm.$el.querySelector('.icon')
    //     let className = useElement.getAttribute('class')
    //     expect(className).to.eq('icon right')
    //     vm.$el.remove()
    //     vm.$destroy()
    // })
    // it('点击 button 触发 click 事件', () => {
    //     const Constructor = Vue.extend(Button)
    //     const vm = new Constructor({
    //         propsData: {
    //             iconName: 'setting',
    //         }
    //     }).$mount()
    //
    //     function original () {}
    //     const spy = chai.spy(original);
    //     vm.$on('click', spy)
    //     vm.$el.click()
    //     expect(spy).to.have.been.called();
    // })
})

