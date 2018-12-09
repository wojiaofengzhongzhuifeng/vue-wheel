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
* 3. 如何表示 && 的关系
*
* 4. 如何测试函数已经执行?
* */
describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.ok
    })
    describe("props", ()=>{
        it("接受autoCloseDelay属性", (done)=>{
            // 生成包含自定义col的div
            const div = document.createElement("div");
            document.body.appendChild(div);

            // 向col组件添加属性, 挂载到div中
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
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
            }, 1500)


            // 删除
            div.remove()
            vm.$destroy()
        })
        it("接受 closeButton 属性", ()=>{
            // 生成包含自定义col的div
            const div = document.createElement("div");
            document.body.appendChild(div);

            // 生成 spy 函数
            function original () {}
            const spy = chai.spy(original);

            // 向col组件添加属性, 挂载到div中
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: "关闭",
                        callback: spy,
                    },
                }
            }).$mount(div)

            // 验证 closeButton 的 text
            expect(vm.$el.querySelector(".closeButton").innerHTML).to.equal("关闭")

            // 验证 closeButton 的 回调函数是否执行
            vm.$el.querySelector(".closeButton").click();
            expect(spy).to.have.been.called();
        })
    })

})
