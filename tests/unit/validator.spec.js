import validator from "../../src/validator"

import {expect} from 'chai'




describe('validator', () => {
    it('存在.', () => {
        expect(validator).to.be.ok
    })
    it("测试 required", () => {
        let xxx = {}
        let yyy = [{key: "email", required: true}]
        let error= validator(xxx, yyy)
        expect(error.email.required).to.equal("必填")
    })

    it("测试 pattern", () => {
        let xxx = {email: "123123"}
        let yyy = [{key: "email", required: true, pattern: "email"}]
        let error= validator(xxx, yyy)
        expect(error.email.pattern).to.equal("邮箱出错")
    })

    it("没有相应规则，应该报错", () => {
        let xxx = {email: "123123"}
        let yyy = [{key: "email", required: true, fdsfdsa: "fdsfdas"}]
        let fn = ()=>{
            validator(xxx, yyy)

        }
        expect(fn).to.throw();
    })

    it("自定义规则， 不应该报错", () => {
        let xxx = {email: "123123"}
        let yyy = [{key: "email", required: true, hasNumber: true}]
        validator.hasNumber = (rule,validationData, error)=>{
            if(!/\d/.test(validationData)){
                error[rule.key].hasNumber = "没有数字"
            } else {
                error[rule.key].hasNumber = undefined

            }
        }
        let fn = ()=>{
            validator(xxx, yyy)

        }
        expect(fn).to.not.throw();
    })

})

