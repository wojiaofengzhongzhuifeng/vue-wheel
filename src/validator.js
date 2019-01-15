/*
* 1. 在函数（函数也是对象）中挂函数 1挂函数
* 2.
* */
export default class Validator{
    constructor(){}

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
                    this[validationKey](rule, validationData, error)
                } else {
                    throw "匹配方法找不到"
                }
            })
        })
        return error

    }


    pattern(rule,validationData, error){
        if(rule.pattern === "email"){
            let reg = /^.+@.+$/
            if(!reg.test(validationData)){
                error[rule.key].pattern = "邮箱出错"
            } else{
                error[rule.key].pattern = undefined
            }
        } else if(rule.pattern === "phone"){
            let reg = /^\d{11}$/
            if(!reg.test(validationData)){
                error[rule.key].pattern = "手机出错"
            } else{
                error[rule.key].pattern = undefined
            }
        }
    }

}

