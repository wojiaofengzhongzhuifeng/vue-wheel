import chai from "chai";
import spies from "chai-spies";

const expect = chai.expect;
const assert = chai.assert;

import Vue from 'vue'
import Tab from '../src/tab/tab'
import TabHead from "../src/tab/tab-head"
import TabBody from "../src/tab/tab-body"
import TabItem from "../src/tab/tab-item"
import TabPane from "../src/tab/tab-pane"

chai.use(spies);


Vue.config.productionTip = false
Vue.config.devtools = false


describe('tab-item', () => {
    it('存在.', () => {
        expect(TabItem).to.be.ok
    })

    it('接受name属性', ()=>{
        Vue.component("w-tab", Tab);
        Vue.component("w-tab-head", TabHead);
        Vue.component("w-tab-body", TabBody);
        Vue.component("w-tab-item", TabItem);
        Vue.component("w-tab-pane", TabPane);
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.innerHTML = `
            <w-tab selected="car">
                <w-tab-head>
                    <w-tab-item name="car">
                        <div>
                            <div>汽车</div>
                        </div>
                    </w-tab-item>
                </w-tab-head>
            </w-tab>
        `
        let vm = new Vue({
            el: div
        })
        let tab = vm.$el.querySelector(".tabItem[data-name='car']");
        console.log(123);
        console.log(tab);
        assert(tab !== null);
    })

    // it('接受disabled', ()=>{
    //     Vue.component("w-tab", Tab);
    //     Vue.component("w-tab-head", TabHead);
    //     Vue.component("w-tab-body", TabBody);
    //     Vue.component("w-tab-item", TabItem);
    //     Vue.component("w-tab-pane", TabPane);
    //     let div = document.createElement("div");
    //     document.body.appendChild(div);
    //     div.innerHTML = `
    //             <w-tab selected="car">
    //                 <w-tab-head>
    //                     <w-tab-item name="car" disabled>
    //                         <div>
    //                             <div>汽车</div>
    //                         </div>
    //                     </w-tab-item>
    //                 </w-tab-head>
    //             </w-tab>
    //         `
    //     let vm = new Vue({
    //         el: div
    //     })
    //     let tabItem = vm.$el.querySelector(".tabItem[data-name='car']");
    //     assert(tabItem.classList.contains("disabled") === true);
    //
    //     // 测试点击之后，回调函数不执行
    //     // 生成 spy 函数
    //     function original () {}
    //     const spy = chai.spy(original);
    //
    //
    //     vm.$on("click", spy);
    //     tabItem.click();
    //     expect(spy).to.have.not.been.called
    // })
});
