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
                    autoClose: false
                }
            }).$mount(div)

            // 测试
            let toastElement = vm.$el
            expect(document.body.contains(toastElement)).to.eq(true)

            // 删除
            div.remove()
            vm.$destroy()
        })
    })

})
