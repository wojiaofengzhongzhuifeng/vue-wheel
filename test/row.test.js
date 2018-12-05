import chai from "chai";
import spies  from "chai-spies";

const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

chai.use(spies);


Vue.config.productionTip = false
Vue.config.devtools = false



describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.be.ok
    })
    it('可以设置 gutter.', (done) => {
        // 注册自定义组件
        Vue.component("w-col", Col)
        Vue.component("w-row", Row)

        // 生成一个div, 作为vue的实例
        let div = document.createElement("div")
        div.innerHTML = `
            <w-row gutter="12">
                <w-col></w-col>
                <w-col></w-col>
            </w-row>      
        `
        document.body.appendChild(div)
        const vm = new Vue({
            el: div
        })

        // 因为gutter属性的生成是异步的, 所以有所不同, 需要在异步代码的最后执行done函数, done由测试框架提供
        setTimeout(()=>{
            // 测试row
            let row = vm.$el.querySelector(".row")
            let rowStyle = row.style;
            expect(rowStyle.marginLeft).to.eq("-6px");
            expect(rowStyle.marginRight).to.eq("-6px");
            expect(rowStyle.marginRight).to.eq(rowStyle.marginLeft);

            // 测试col
            let col = vm.$el.querySelector(".col")
            let colStyle = col.style;
            expect(colStyle.paddingLeft).to.eq("6px");
            expect(colStyle.paddingRight).to.eq("6px");
            expect(colStyle.marginRight).to.eq(colStyle.marginLeft);


            vm.$el.remove()
            vm.$destroy()
            done()
        }, 0)
    })
    it('可以设置 align.', (done) => {
        // 注册自定义组件
        Vue.component("w-col", Col)
        Vue.component("w-row", Row)

        // 生成一个div, 作为vue的实例
        let div = document.createElement("div")
        div.innerHTML = `
            <w-row align="center">
                <w-col>
                   <div>1</div>
                </w-col>
                <w-col>
                   <div>2</div>
                </w-col>
            </w-row>      
        `
        document.body.appendChild(div)
        const vm = new Vue({
            el: div
        })
        setTimeout(()=>{
            let col = vm.$el.querySelector(".col");
            expect(col.classList.contains("align-center")).to.eq(true);
            vm.$el.remove()
            vm.$destroy()
            done()
        }, 0)



    })
})
