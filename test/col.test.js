import chai from "chai";
import spies  from "chai-spies";

const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/grid/col'
chai.use(spies);


Vue.config.productionTip = false
Vue.config.devtools = false



describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.be.ok
    })
    it('可以设置span属性.', () => {
        // 生成包含自定义col的div
        const div = document.createElement("div");
        document.body.appendChild(div);

        // 向col组件添加属性, 挂载到div中
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: 1
            }
        }).$mount(div)

        // 测试
        let colElement = vm.$el
        expect(colElement.classList.contains("span-1")).to.eq(true)

        // 删除
        div.remove()
        vm.$destroy()
    })
    it('可以设置offset属性.', () => {
        // 生成包含自定义col的div
        const div = document.createElement("div");
        document.body.appendChild(div);

        // 向col组件添加属性, 挂载到div中
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset: 1
            }
        }).$mount(div)

        // 测试
        let colElement = vm.$el
        expect(colElement.classList.contains("offset-1")).to.eq(true)

        // 删除
        div.remove()
        vm.$destroy()
    })
    it('可以设置phone属性.', () => {
        // 生成包含自定义col的div
        const div = document.createElement("div");
        document.body.appendChild(div);

        // 向col组件添加属性, 挂载到div中
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                phone: {
                    span:1,
                    offset:2,
                }
            }
        }).$mount(div)

        // 测试
        let colElement = vm.$el
        expect(colElement.classList.contains("span-phone-1")).to.eq(true)
        expect(colElement.classList.contains("offset-phone-2")).to.eq(true)

        // 删除
        div.remove()
        vm.$destroy()
    })
    it('可以设置 ipad 属性.', () => {
        // 生成包含自定义col的div
        const div = document.createElement("div");
        document.body.appendChild(div);

        // 向col组件添加属性, 挂载到div中
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                ipad: {
                    span:1,
                    offset:2,
                }
            }
        }).$mount(div)

        // 测试
        let colElement = vm.$el
        expect(colElement.classList.contains("span-ipad-1")).to.eq(true)
        expect(colElement.classList.contains("offset-ipad-2")).to.eq(true)

        // 删除
        div.remove()
        vm.$destroy()
    })
    it('可以设置 narrowPc 属性.', () => {
        // 生成包含自定义col的div
        const div = document.createElement("div");
        document.body.appendChild(div);

        // 向col组件添加属性, 挂载到div中
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                narrowPc: {
                    span:1,
                    offset:2,
                }
            }
        }).$mount(div)

        // 测试
        let colElement = vm.$el
        expect(colElement.classList.contains("span-narrowPc-1")).to.eq(true)
        expect(colElement.classList.contains("offset-narrowPc-2")).to.eq(true)

        // 删除
        div.remove()
        vm.$destroy()
    })
    it('可以设置 pc 属性.', () => {
        // 生成包含自定义col的div
        const div = document.createElement("div");
        document.body.appendChild(div);

        // 向col组件添加属性, 挂载到div中
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pc: {
                    span:1,
                    offset:2,
                }
            }
        }).$mount(div)

        // 测试
        let colElement = vm.$el
        expect(colElement.classList.contains("span-pc-1")).to.eq(true)
        expect(colElement.classList.contains("offset-pc-2")).to.eq(true)

        // 删除
        div.remove()
        vm.$destroy()
    })
    it('可以设置 widthPc 属性.', () => {
        // 生成包含自定义col的div
        const div = document.createElement("div");
        document.body.appendChild(div);

        // 向col组件添加属性, 挂载到div中
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                widthPc: {
                    span:1,
                    offset:2,
                }
            }
        }).$mount(div)

        // 测试
        let colElement = vm.$el
        expect(colElement.classList.contains("span-widthPc-1")).to.eq(true)
        expect(colElement.classList.contains("offset-widthPc-2")).to.eq(true)

        // 删除
        div.remove()
        vm.$destroy()
    })
    it('可以设置 widthWidthPc 属性.', () => {
        // 生成包含自定义col的div
        const div = document.createElement("div");
        document.body.appendChild(div);

        // 向col组件添加属性, 挂载到div中
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                widthWidthPc: {
                    span:1,
                    offset:2,
                }
            }
        }).$mount(div)

        // 测试
        let colElement = vm.$el
        expect(colElement.classList.contains("span-widthWidthPc-1")).to.eq(true)
        expect(colElement.classList.contains("offset-widthWidthPc-2")).to.eq(true)

        // 删除
        div.remove()
        vm.$destroy()
    })
})
