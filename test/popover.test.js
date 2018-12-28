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
    <w-popover position="top" >
        <w-button class="test">点击我2</w-button>
        <template slot="content">
            <p>fdjskfldjsa</p>
        </template>
    </w-popover>
        `
        let vm = new Vue({
            el: div
        })


        vm.$nextTick(()=>{
            let button = document.body.querySelector(".test")
            button.click();
            setTimeout(()=>{
                let contentClass = document.body.querySelector(".popover-wrapper").classList
                console.log(contentClass);
                expect(contentClass.contains('position-top')).to.be.true
                done()
            }, 200)
        })

    })


})
