/*
* 1. 在函数（函数也是对象）中挂函数 1挂函数
* 2.
* */

let xxx = {email: "22@.com", phone: 15702097950}

let yyy = [{key: "email", required: true, pattern: "email", fdsfdas:"fdsa"}, {key:"phone", required: true, pattern: "phone"}]

// 期待返回以下数据
// let error = {
//   email:{
//     required: "必填",
//     pattern: "格式不对"
//   }
// }

export default function validator(data, rules){
let error = {}
rules.forEach((rule)=>{
    console.log(rule);
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
    validator.pattern(rule, validationData, error)

    let validators = Object.keys(rule).filter((key)=>key !== "key" && key !== "required")

    validators.forEach((validationKey)=>{
        if(validator[validationKey]){
            validator[validationKey](rule, validationData, error)
        } else {
            throw "匹配方法找不到"
        }
    })
})
return error
}

//1挂函数2
validator.pattern = (rule,validationData, error)=>{
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
