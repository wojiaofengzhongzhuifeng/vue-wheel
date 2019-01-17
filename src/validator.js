/*
* 1. 在函数（函数也是对象）中挂函数 1挂函数
* 2.
* */
export default class Validator{
    constructor(){}
    static add(name, fn){
        Validator.prototype[name] = fn
    }
    validate(data, rules){
        let error = {}
        rules.forEach((rule)=>{
            let validationData = data[rule.key]
            error[rule.key] = {}

            //1挂函数1
            // 单独校验required, 没填数据直接返回
            if(rule.required === true){
                if(!validationData && validationData !== 0){
                    error[rule.key].required = "必填"
                    return
                } else {
                    error[rule.key].required = undefined
                }
            }

            //1挂函数3
            let validators = Object.keys(rule).filter((key)=>key !== "key" && key !== "required")
            validators.forEach((validationKey)=>{
                if(this[validationKey]){
                    const result = this[validationKey](rule, validationData)
                    error[rule.key][validationKey] = result
                } else {
                    throw "匹配方法找不到"
                }
            })
        })
        return error

    }


    pattern(rule,validationData){
        if(rule.pattern === "email"){
            let reg = /^.+@.+$/
            if(!reg.test(validationData)){
                return "邮箱出错"
            }
        } else if(rule.pattern === "phone"){
            let reg = /^\d{11}$/
            if(!reg.test(validationData)){
                return "手机出错"
            }
        }
    }

}

// let xxx = {email: "123123"}
// let yyy = [{key: "email", required: true, pattern: "phone"}]
// let validator = new Validator()
// let error = validator.validate(xxx,yyy)
// console.log(error)
