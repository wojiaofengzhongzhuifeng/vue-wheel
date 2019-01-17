import Validator from "../../src/validator"

import {expect} from 'chai'




describe('validator', () => {
    it('存在.', () => {
        expect(Validator).to.be.ok
    })
    it("测试 required", () => {
        let xxx = {}
        let yyy = [{key: "email", required: true}]
        let validator = new Validator()
        let error = validator.validate(xxx,yyy)
        expect(error.email.required).to.equal("必填")
    })

    it("测试 pattern", () => {
        let xxx = {email: "123123"}
        let yyy = [{key: "email", required: true, pattern: "email"}]
        let validator = new Validator()
        let error = validator.validate(xxx,yyy)
        expect(error.email.pattern).to.equal("邮箱出错")
    })

    it("没有相应规则，应该报错", () => {
        let xxx = {email: "123123"}
        let yyy = [{key: "email", required: true, fdsfdsa: "fdsfdas"}]
        let fn = ()=>{
            let validator = new Validator()
            validator.validate(xxx,yyy)
        }
        expect(fn).to.throw();
    })
    //
    it("自定义规则， 不应该报错", () => {
        let xxx = {email: "123123"}
        let yyy = [{key: "email", required: true, hasNumber: true}]
        let validator = new Validator()
        validator.hasNumber = (rule,validationData, error)=>{
            if(!/\d/.test(validationData)){
                error[rule.key].hasNumber = "没有数字"
            } else {
                error[rule.key].hasNumber = undefined

            }
        }
        let fn = ()=>{
            validator.validate(xxx,yyy)
        }
        expect(fn).to.not.throw();
    })
    it("允许添加公共验证规则",() => {
        let xxx = {email: "fdsfd@qq.com"}
        let yyy = [{key: "email", required: true, hasNumber: true}]
        Validator.add("hasNumber", (rule, validationData, error)=>{
            if(!/\d/.test(validationData)){
                error[rule.key].hasNumber = "没有数字"
            } else {
                error[rule.key].hasNumber = undefined
            }
        })
        let validation1 = new Validator()
        let validation2 = new Validator()
        let error1 = validation1.validate(xxx,yyy)
        let error2 = validation2.validate(xxx,yyy)

        expect(error1.email.hasNumber).to.equal("没有数字")
        expect(error2.email.hasNumber).to.equal("没有数字")


    })

})

