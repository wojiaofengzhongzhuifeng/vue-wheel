<template>
    <div class="dataPickerWrapper">
        <Popover position="bottom" trigger="click">
            <Input />
            <template slot="content" >
                <div class="popover-container">
                    <div class="popover-header">
                        popheader
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
