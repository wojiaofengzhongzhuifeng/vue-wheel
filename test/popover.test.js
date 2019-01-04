import chai from "chai";
import spies from "chai-spies";

const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'
import Button from "../src/button"

chai.use(spies);


Vue.config.productionTip = false

Vue.config.devtools = false

describe('spies', () => {
    it('存在.', () => {
        expect(Popover).to.be.ok
    })
    it('接受 position 属性', (done) => {
        Vue.component("w-popover", Popover);
        Vue.component("w-button", Button);

        let div = document.createElement("div");
        document.body.appendChild(div);
        div.innerHTML = `
            <w-popover position="bottom" ref="a">
                <w-button class="test">点击我2</w-button>
                <template slot="content">
                    <p>fdjskfldjsa</p>
                </template>
            </w-popover>
        `
        let vm = new Vue({
            el: div
        })


        vm.$nextTick(() => {
            let button = vm.$refs.a.$refs.button
            button.click();
            setTimeout(() => {
                let contentClass = vm.$refs.a.$refs.content.classList
                expect(contentClass.contains('position-bottom')).to.be.true
                done()
            }, 0)
        })
    })

    it('接受 trigger 属性', (done) => {
        Vue.component("w-popover", Popover);
        Vue.component("w-button", Button);

        let div = document.createElement("div");
        document.body.appendChild(div);
        div.innerHTML = `
            <w-popover trigger="hover" ref="aaaa">
                <w-button class="test1">2323232</w-button>
                <template slot="content">
                    <p>fdjskfldjsa</p>
                </template>
            </w-popover>
        `
        let vm = new Vue({
            el: div
        })


        vm.$nextTick(() => {
            let button = vm.$refs.changeSelectcascader.$refs.button
            const event = new Event("mouseenter");
            button.dispatchEvent(event);
            setTimeout(() => {
                const {content} = vm.$refs.changeSelectcascader.$refs;
                content.classList.contains(".popover-wrapper")
                // 通过这种方法验证
                expect(content.classList.contains("popover-wrapper")).to.be.true
                done()
            }, 200)
        })

    })


})
