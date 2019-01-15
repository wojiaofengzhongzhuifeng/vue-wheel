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
})

