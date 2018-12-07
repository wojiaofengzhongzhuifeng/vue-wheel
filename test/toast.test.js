import chai from "chai";
import spies  from "chai-spies";

const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'
chai.use(spies);


Vue.config.productionTip = false
Vue.config.devtools = false


/*
* 1. 需要测试的内容
*   - 接受的属性
*   -
*
* 2. expect(document.body.contains(toastElement)) === 返回的是 document.body.contains(toastElement) 打印内容
*
* 3. expect(document.body.contains(xxxDom)).to.eq(true) => 测试 xxxDom 存在
*
* */
describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.ok
    })
    describe("props", ()=>{
        it("接受 autoClose ", ()=>{
            // 生成包含自定义col的div
            const div = document.createElement("div");
            document.body.appendChild(div);

            // 向col组件添加属性, 挂载到div中
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: true
                }
            }).$mount(div)

            // 测试: 不应该出现 .closeButton
            let toastElement = vm.$el
            let colseButton = toastElement.querySelector(".closeButton")
            expect(document.body.contains(colseButton)).to.eq(false)

            // 删除
            div.remove()
            vm.$destroy()
        })
        it("接受autoCloseDelay属性", (done)=>{
            // 生成包含自定义col的div
            const div = document.createElement("div");
            document.body.appendChild(div);

            // 向col组件添加属性, 挂载到div中
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: true,
                    autoCloseDelay: 1,
                }
            }).$mount(div)

            // 测试: 0.5s 之后 => toast 应该存在 ; 1.5s 之后 => toast 不应该存在
            let toastElement = vm.$el
            setTimeout(()=>{
                expect(document.body.contains(toastElement)).to.eq(true)
                done()
            }, 500)
            setTimeout(()=>{
                expect(document.body.contains(toastElement)).to.eq(false)
                done()
            }, 1900)

            // 删除
            div.remove()
            vm.$destroy()
        })
    })

})
