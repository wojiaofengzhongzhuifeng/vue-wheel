
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
        let valadationData = data[rule.key]
        error[rule.key] = {}

        // 验证required
        if(rule.required === true){
            // validataion不存在
            if(!valadationData && valadationData !== 0){
                error[rule.key].required = "必填"
                return
            } else {
                error[rule.key].required = undefined
            }
        }

        //
        if(rule.pattern){
            if(rule.pattern === "email"){
                let reg = /^.+@.+$/
                if(!reg.test(valadationData)){
                    error[rule.key].pattern = "邮箱出错"
                } else{
                    error[rule.key].pattern = undefined
                }
            } else if(rule.pattern === "phone"){
                let reg = /^\d{11}$/
                if(!reg.test(valadationData)){
                    error[rule.key].pattern = "手机出错"
                } else{
                    error[rule.key].pattern = undefined
                }
            }
        }
    })
    return error
}
let showError= validator(xxx, yyy)
console.log(showError)
