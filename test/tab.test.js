import chai from "chai";
import spies from "chai-spies";

const expect = chai.expect;
import Vue from 'vue'
import Tab from '../src/tab'
import TabHead from "../src/tab-head"
import TabBody from "../src/tab-body"
import TabItem from "../src/tab-item"
import TabPane from "../src/tab-pane"

chai.use(spies);


Vue.config.productionTip = false
Vue.config.devtools = false


describe('Tab', () => {
    it('存在.', () => {
        expect(Tab).to.be.ok
    })

    it('接受selected属性', (done) => {
        Vue.component("w-tab", Tab);
        Vue.component("w-tab-head", TabHead);
        Vue.component("w-tab-body", TabBody);
        Vue.component("w-tab-item", TabItem);
        Vue.component("w-tab-pane", TabPane);
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.innerHTML = `
        <w-tab selected="1">
            <w-tab-head>
                <w-tab-item name="1">标题1</w-tab-item>
                <w-tab-item name="2">标题2</w-tab-item>
                <w-tab-item name="3">标题3</w-tab-item>
            </w-tab-head>
            <w-tab-body>
                <w-tab-pane  name="1">内容1</w-tab-pane>
                <w-tab-pane  name="2">内容2</w-tab-pane>
                <w-tab-pane  name="3">内容3</w-tab-pane>
            </w-tab-body>
        </w-tab>
        `
        let vm = new Vue({
            el: div
        })

        setTimeout(()=>{
            let tab = vm.$el.querySelector(".tabItem[data-name='1']");
            expect(tab.classList.contains('active')).to.be.true;
            done();
        }, 1500)

    })
})
