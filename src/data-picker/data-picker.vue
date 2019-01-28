<template>
    <div class="dataPickerWrapper" style="border:1px solid red">
        <Popover position="bottom" trigger="click">
            <Input />
            <template slot="content" >
                <div class="popover-container">
                    <div class="header">
                        <span class="left-container">
                            <Icon icon-name="doubleleft"></Icon>
                            <Icon icon-name="left"></Icon>
                        </span>

                        <span class="date-container">
                            <span class="year">xxx年</span>
                            <span class="month">xx月</span>
                        </span>

                        <span class="right-container">
                            <Icon icon-name="doubleright"></Icon>
                            <Icon icon-name="right"></Icon>
                        </span>
                    </div>
                    <div class="content-container">
                        <div class="date-content">
                            <div class="dateHeader">
                                <span>一</span>
                                <span>二</span>
                                <span>三</span>
                                <span>四</span>
                                <span>五</span>
                                <span>六</span>
                                <span>日</span>
                            </div>
                            <div class="date">
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </Popover>
    </div>
</template>

<script>
    import Input from "../input"
    import Popover from "../popover"
    import Icon from "../icon"
    export default {
        data(){
            return {
                showDate:[]
            }
        },
        components:{
            Input,
            Popover,
            Icon,
        },
        methods:{
            initDate(dateObj){
                // 获取目前的年月
                let nowDate = dateObj ||new Date()
                let nowYear = nowDate.getFullYear()
                let nowMonth = nowDate.getMonth()

                // 获取目前月的第一天的时间对象，获取目前月的最后一天的时间对象（如new Date(2018,9,0) 获取9月最后一天的时间对象）
                let thisMonthFirstDateObj = new Date(nowYear, nowMonth, 1)
                let thisMonthLastDateObj = new Date(nowYear, nowMonth + 1, 0)

                // 获取上一个月最后一天的时间对象
                let lastMonthLastDateObj = new Date(nowYear, nowMonth, 0)

                // 获取下一个月第一天的时间对象
                let nextMonth = nowMonth + 1
                let nextMonthFirstDateObj = new Date(nowYear, nextMonth, 1)

                // 获取这个月的最后一天的日期，确定循环push次数
                let thisMonthDate = []
                let lastDate = thisMonthLastDateObj.getDate()
                for(let i=1;i<=lastDate;i++){
                    thisMonthDate.push(new Date(nowYear, nowMonth, i))
                }

                // 前面添加日期对象
                let addBeforeItem = thisMonthFirstDateObj.getDay() - 1
                let lastMonthLastDateObjYear = lastMonthLastDateObj.getFullYear()
                let lastMonthLastDateObjMonth = lastMonthLastDateObj.getMonth()
                for(let i=0;i<addBeforeItem;i++){
                    thisMonthDate.unshift(new Date(lastMonthLastDateObjYear, lastMonthLastDateObjMonth, lastMonthLastDateObj.getDate() - i))
                }
                // 后面添加日期对象
                let addAfterItem = 42 - thisMonthDate.length
                let nextMonthFirstDateObjYear = nextMonthFirstDateObj.getFullYear()
                let nextMonthFirstDateObjMonth = nextMonthFirstDateObj.getMonth()
                for(let i=1;i<=addAfterItem;i++){
                    thisMonthDate.push(new Date(nextMonthFirstDateObjYear, nextMonthFirstDateObjMonth, i))
                }
                return thisMonthDate
            },
            sliceArray(array, number){
                let newArray = []
                let items = array.length / number
                console.log(items)
                let start = 0
                let end = number
                for(let i=0;i<items;i++){
                    newArray.push(array.slice(start, end))
                    start = end
                    end += number
                }
                return newArray
            }
        },
        mounted() {
            console.log(new Date());
            this.showDate = this.initDate(new Date())
            let test = this.sliceArray(this.showDate, 7)
            console.log(test);
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/var";
    .header{
        display: flex;
        justify-content: space-between;
    }
    .content-container{
        .date-content{
            .dateHeader{
                display: flex;
                justify-content: space-between;
                span{
                    padding: 2px 5px;
                }
            }
        }
    }
</style>
