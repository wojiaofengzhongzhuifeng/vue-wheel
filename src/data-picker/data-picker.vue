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

                        <span class="date-container" @click="changeModel">
                            <!--1赋值2： 当 showDate 不为 null时才去获取年-->
                            <span class="year">{{showDate !== null && showDate.getFullYear()}}年</span>
                            <span class="month">{{showDate !== null && showDate.getMonth() + 1}}月</span>
                        </span>

                        <span class="right-container">
                            <Icon icon-name="doubleright"></Icon>
                            <Icon icon-name="right"></Icon>
                        </span>
                    </div >
                    <div class="content-container">
                        <div class="date-content" v-if="showDay === true">
                            <!--2距离-->
                            <table cellspacing="10px">
                                <thead>
                                    <tr>
                                        <th v-for="i in [0,1,2,3,4,5,6]">
                                            {{chineseWeekName[i]}}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="array in showArray">
                                        <td v-for="item in array" :class="greyColor(item)">
                                            <div>
                                                {{item.getDate()}}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="month-content" v-else>月</div>
                    </div>
                </div>
            </template>
        </Popover>
    </div>
</template>

<script>
    /*
    * 1. 使用 date 值，注意使用赋值之后的 date 1赋值
    * 2. table 上下 左右格子的距离 cellspacing cellpadding 2距离
    * */
    import Input from "../input"
    import Popover from "../popover"
    import Icon from "../icon"
    export default {
        data(){
            return {
                showArray:[],
                chineseWeekName: ["一", "二", "三", "四", "五", "六","日"],
                // 1赋值1
                showDate: null,
                showDay: true,  // year, month, day
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
                let start = 0
                let end = number
                for(let i=0;i<items;i++){
                    newArray.push(array.slice(start, end))
                    start = end
                    end += number
                }
                return newArray
            },
            changeModel(){
                this.showDay = !this.showDay
            },
            greyColor(item){
                let itemMonth = item.getMonth()
                let standardMonth = this.showDate.getMonth()
                if(itemMonth !== standardMonth){
                    return "greyColor"
                }
            }
        },
        mounted() {
            this.showDate = new Date()
            console.log(this.showDate);
            this.showArray = this.sliceArray(this.initDate(new Date()), 7)

        }
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/var";
    .header{
        display: flex;
        justify-content: space-between;
        .left-container, .right-container{
            svg{
                cursor: pointer;
                &:hover{
                    color:$font-color-active;
                }
            }
        }
        .date-container{
            cursor: pointer;
            &:hover{
                color:$font-color-active;
            }
        }
    }
    .content-container{
        .date-content{
            table tbody tr td{
                text-align: center;
                &:hover{
                    cursor: pointer;
                    background: $line-blue;
                }
                &.greyColor{
                    color: rgba(0,0,0,0.25);;
                }
            }
        }
        .month-content{
            width:234px;
            height:248px;
        }
    }
</style>
