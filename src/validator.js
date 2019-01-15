// 在函数（函数也是对象）中挂函数 1挂函数


// 最简单的思路
let xxx = {email: "22@.com", phone: 15702097950}

let yyy = [{key: "email", required: true, pattern: "email"}, {key:"phone", required: true, pattern: "phone"}]

// 期待返回以下数据
// let error = {
//   email:{
//     required: "必填",
//     pattern: "格式不对"
//   }
// }

function validator(data, rules){
    let error = {}
    rules.forEach((rule)=>{
        let validationData = data[rule.key]
        error[rule.key] = {}

        //1挂函数1
        // 验证required
        // if(rule.required === true){
        //     // validataion不存在
        //     if(!valadationData && valadationData !== 0){
        //         error[rule.key].required = "必填"
        //         return
        //     } else {
        //         error[rule.key].required = undefined
        //     }
        // }

        //1挂函数3
        validator.required(rule, validationData, error)

        validator.pattern(rule, validationData, error)

    })
    return error
}

//1挂函数2
validator.required = (rule,validationData, error)=>{
    // 验证required
    if(rule.required === true){
        // validataion不存在
        if(!validationData && validationData !== 0){
            error[rule.key].required = "必填"
            return
        } else {
            error[rule.key].required = undefined
        }
    }
}
validator.pattern = (rule,validationData, error)=>{
    if(rule.pattern){
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
let showError= validator(xxx, yyy)
console.log(showError)
