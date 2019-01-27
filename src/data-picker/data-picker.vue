<template>
    <div class="dataPickerWrapper" style="border:1px solid red">
        <Popover position="bottom" trigger="click">
            <Input />
            <template slot="content" >
                <div class="popover-container">
                    <div class="popover-header">
                        popheader
                    </div>
                    <div class="popover-content">
                        popover-content
                    </div>
                    <div class="popover-footer">
                        popover-footer
                    </div>
                </div>
            </template>
        </Popover>
    </div>
</template>

<script>
    import Input from "../input"
    import Popover from "../popover"
    export default {
        components:{
            Input,
            Popover
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/var";
</style>
