<template>
    <div class="dataPickerWrapper" style="border:1px solid red">
        <Popover position="bottom" trigger="click" @openContent="openContent">
            <Input :value="dateString" @input="onInputDate"/>
            <template slot="content" slot-scope="slotProps">
                <div class="popover-container">
                    <div class="header">
                        <span class="left-container">
                            <Icon icon-name="doubleleft" @click="changeMonthAllDate('before', 'year')"></Icon>
                            <Icon icon-name="left"  @click="changeMonthAllDate('before', 'month')"></Icon>
                        </span>

                        <span class="date-container" @click="changeModel">
                            <!--1赋值2： 当 selectDate 不为 null时才去获取年-->
                            <span class="year">{{showMonthAllDate !== null && showMonthAllDate.getFullYear()}}年</span>
                            <span class="month">{{showMonthAllDate !== null && showMonthAllDate.getMonth() + 1}}月</span>
                        </span>

                        <span class="right-container">
                            <Icon icon-name="right" @click="changeMonthAllDate('next', 'month')"></Icon>
                            <Icon icon-name="doubleright" @click="changeMonthAllDate('next', 'year')"></Icon>
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
                                        <td v-for="item in array" :class="[greyColor(item), selected(item)]" @click="onClickCell(item, slotProps)">
                                            <div>
                                                {{item.getDate()}}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="month-content" v-else>
                            <div class="year-selection">
                                <select @change="onSelectYear">
                                    <option :value="year" v-for="year in selectYear(showMonthAllDate.getFullYear())" :selected="defaultYear(year)">
                                        {{year}}
                                    </option>
                                </select>

                                <select @change="onSelectMonth">
                                    <option :value="month" v-for="month in selectMonth" :selected="defaultMonth(month)">
                                        {{month + 1}}
                                    </option>
                                </select>
                            </div>
                        </div>
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
    * 3. 数据响应式 1.selectDate -> 2.showArray -> 3.ui    其中 2和3 已经保持了数据响应，但是 1和2 还没有 3响应
    * 4.
    * */
    import Input from "../input"
    import Popover from "../popover"
    import Icon from "../icon"
    export default {
        props:{
            scope:{
                type: Array,
                default: ()=>[],
            }
        },
        data(){
            return {
                showArray:[],
                chineseWeekName: ["一", "二", "三", "四", "五", "六","日"],
                // 1赋值1
                selectDate: null,
                showDay: true,  // year, month, day
                showMonthAllDate: null,
            }
        },
        components:{
            Input,
            Popover,
            Icon,
        },
        watch: {
            // 3响应：如果 selectDate 变化，就执行更新 showArray 函数
            showMonthAllDate(){
                this.updateShowArray()
            }
        },
        computed:{
            selectMonth(){
                if(this.scope.length === 0){
                    return [0,1,2,3,4,5,6,7,8,9,10,11]
                } else {
                    let thisYear = this.showMonthAllDate && this.showMonthAllDate.getFullYear()
                    let startDate =  this.scope[0]
                    let endDate =  this.scope[1]
                    if(thisYear === startDate.getFullYear()){
                        let start = startDate.getMonth()
                        let end = 11
                        return this.generateContinuousArray(start, end)
                    } else if (thisYear === endDate.getFullYear()){
                        let start = 1
                        let end = endDate.getMonth()
                        return this.generateContinuousArray(start, end)
                    } else {
                        return [0,1,2,3,4,5,6,7,8,9,10,11]
                    }
                }
            },
            dateString(){
                return this.selectDate && `${this.selectDate.getFullYear()}-${this.selectDate.getMonth() + 1}-${this.selectDate.getDate()}`
            }
        },
        methods:{
            onInputDate(e){
                console.log(e.target.value);
                let value = e.target.value
                let reg = /^\d{4}-\d{1,2}-\d{1,2}$/g
                if(value.match(reg)){
                    let dateArray = value.split("-")
                    let year = dateArray[0] - 0
                    let month = dateArray[1] - 1
                    let day = dateArray[2] - 0
                    this.selectDate = new Date(year, month, day)
                }
            },
            generateContinuousArray(start, end){
                let monthItems = []
                for(let i = start;i<=end;i++){
                    monthItems.push(i)
                }
                return monthItems
            },
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
                let standardMonth = this.showMonthAllDate.getMonth()
                if(itemMonth !== standardMonth){
                    return "greyColor"
                }
            },
            updateShowArray(){
                this.showArray = this.sliceArray(this.initDate(this.showMonthAllDate), 7)
            },
            onSelectYear(e){
                let selectYear = e.target.value - 0
                let oldMonth
                if(this.scope.length === 0){
                    oldMonth = this.showMonthAllDate.getMonth()
                } else {
                    // 有年月限制
                    if(selectYear === this.scope[0].getFullYear()){
                        oldMonth = this.scope[0].getMonth()
                    } else if (selectYear === this.scope[1].getFullYear()){
                        oldMonth = this.scope[1].getMonth()
                    } else {
                        oldMonth = this.showMonthAllDate.getMonth()
                    }
                }
                this.showMonthAllDate = new Date(selectYear, oldMonth)
                this.showDay = true

            },
            onSelectMonth(e){
                let selectMonth = e.target.value - 0
                let oldYear = this.showMonthAllDate.getFullYear()
                this.showMonthAllDate = new Date(oldYear, selectMonth)
                this.showDay = true
            },
            selectYear(year){
                if(this.scope.length === 0){
                    let start = year - 5
                    let end = year + 5
                    return this.generateContinuousArray(start, end)
                } else {
                    let start = this.scope[0].getFullYear()
                    let end = this.scope[1].getFullYear()
                    return this.generateContinuousArray(start, end)
                }
            },
            defaultYear(yearItem){
                if(yearItem === this.showMonthAllDate.getFullYear()){
                    return true
                }
            },
            defaultMonth(monthItem){
                if(monthItem === this.showMonthAllDate.getMonth()){
                    return true
                }
            },
            onClickCell(dateItem, slotProps){
                this.selectDate = dateItem
                slotProps.close()
                this.$emit("change", this.selectDate)
            },
            selected(dateItem){
                if(
                    dateItem.getFullYear() ===this.selectDate.getFullYear() &&
                    dateItem.getMonth() === this.selectDate.getMonth() &&
                    dateItem.getDate() === this.selectDate.getDate()
                ){
                    return "selected"
                }
            },
            changeMonthAllDate(action, format){
                const nowShowMonthAllDate = this.showMonthAllDate
                const nowShowMonth = nowShowMonthAllDate.getMonth()
                const nowShowYear = nowShowMonthAllDate.getFullYear()
                if(format === 'month' && action === 'next'){
                    this.showMonthAllDate = new Date(nowShowYear, nowShowMonth + 1)
                } else if (format === 'month' && action === 'before'){
                    this.showMonthAllDate = new Date(nowShowYear, nowShowMonth - 1)
                } else if (format === 'year' && action === 'before'){
                    this.showMonthAllDate = new Date(nowShowYear - 1, nowShowMonth)
                } else if (format === 'year' && action === 'next'){
                    this.showMonthAllDate = new Date(nowShowYear + 1, nowShowMonth)
                }
            },
            //11浮层2： data-pick组件需要知道popover的content是否打开
            openContent(){
                this.showDay = true
            }
        },
        mounted() {
            this.selectDate = new Date()
            this.showMonthAllDate = new Date()
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
                    color:white;
                }
                &.greyColor{
                    color: rgba(0,0,0,0.25);;
                }
                &.selected{
                    background: $line-blue;
                    color:white;

                }
            }
        }
        .month-content{
            width:234px;
            height:248px;
        }
    }
</style>
