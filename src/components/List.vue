<template>
<div>

    <div class="mui-card">
        <!--页眉，放置标题-->
        <div class="mui-card-header">页眉</div>
        <!--内容区-->
        <div class="mui-card-content">内容区</div>
        <!--页脚，放置补充信息或支持的操作-->
        <div class="mui-card-footer">页脚</div>
    </div>

    <ul class="mui-table-view">

        <li class="mui-table-view-cell">Item 1 Item 1Item 1Item 1Item 1Item 1Item 1
            <div class="mui-input-row mui-radio mui-left">
                <input name="radio1" id="radio1" type="radio">
                <label for="radio1">A,radio1</label>
            </div>
            <div class="mui-input-row mui-radio mui-left">
                <input name="radio1" id="radio2" type="radio">
                <label for="radio2">B,radio2</label>
            </div>
            <div class="mui-input-row mui-radio mui-left">
                <input name="radio1" id="radio3" type="radio">
                <label for="radio3">C,radio3</label>
            </div>
            <div class="mui-input-row mui-radio mui-left">
                <input name="radio1" id="radio4" type="radio">
                <label for="radio4" AutoSize="false" class="white-space">D,radio4radio4radio4radio4radio4radio4radio4radio4radio4radio4radio4radio4</label>
            </div>
        </li>

        <li class="mui-table-view-cell">Item 2</li>

        <li class="mui-table-view-cell">Item 3</li>

    </ul>
    <ul class="mui-table-view mui-table-view-radio">
        <li class="mui-table-view-cell">
            <a class="mui-navigate-right">Item 1</a>
        </li>
        <li class="mui-table-view-cell mui-selected">
            <a class="mui-navigate-right">Item 2</a>
        </li>
        <li class="mui-table-view-cell">
            <a class="mui-navigate-right">Item 3</a>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            chapterId: ""
        }
    },
    created() {

        this.chapterId = this.$route.query.chapterId;
        //this.mui.alert(this.chapterId);
    }

}
</script>

<style scoped>
.white-space {
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
}

.mui-radio.mui-left label,
.mui-checkbox.mui-left label {
    padding-right: 15px;
    padding-left: 30px;
}

.mui-radio.mui-left input[type='radio'],
.mui-checkbox.mui-left input[type='checkbox'] {
    left: 0;
}
</style>
