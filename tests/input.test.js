import chai from "chai"
import spies  from "chai-spies";
import Vue from 'vue'
import Input from '../src/input'
const expect = chai.expect;

chai.use(spies);


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    it('可以设置 disabled.', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                disabled: true
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
                icon: {name: 'setting', message: '你填错了信息'}
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
    it('接受value', ()=>{
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                value: "123321"
            }
        }).$mount()
        const inputText = vm.$el.querySelector("input").value
        expect(inputText).to.equal("123321")
    })
    describe("事件", ()=>{
        it("支持 change / input / focus / blur  事件", ()=>{
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({}).$mount()

            // 生成spy函数
            function original () {}
            const spy = chai.spy(original);

            ["change", "input", "focus", "blur"].forEach((eventString)=>{
                vm.$on(eventString, spy)
                // js 模拟触发input事件, 测试自制Input被执行,
                let event = new Event(eventString)
                let inputElement = vm.$el.querySelector("input")
                inputElement.dispatchEvent(event)
                expect(spy).to.have.been.called().with(event);
            })

        })
    })
})


