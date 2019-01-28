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
                        <div class="dateContent">
                            <div class="dateHeader">
                                <span>一</span>
                                <span>二</span>
                                <span>三</span>
                                <span>四</span>
                                <span>五</span>
                                <span>六</span>
                                <span>日</span>
                            </div>
                        </div>
                    </div>
                    <!--<div class="footer">-->
                        <!--content-->
                    <!--</div>-->
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
        components:{
            Input,
            Popover,
            Icon,
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
        .dateContent{
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
