<template>
<div>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell" v-for="item in chapterList" @click="toList(item.id)">{{item.name}}
            <span class="mui-badge mui-badge-primary">{{item.count}}</span>
        </li>
        <!-- <li class="mui-table-view-cell">Item 2
            <span class="mui-badge mui-badge-success">22</span>
        </li>
        <li class="mui-table-view-cell">Item 3
            <span class="mui-badge">33</span>
        </li> -->
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            //科目id
            subjectId: "",

            chapterList: [{
                id: "1",
                name: "chapter 1",
                count: 1
            }, {
                id: "2",
                name: "chapter 2",
                count: 12
            }, {
                id: "3",
                name: "chapter 3",
                count: 123
            }, {
                id: "4",
                name: "chapter 4",
                count: 1234
            }]
        }
    },
    created() {
        this.subjectId = this.$route.query.subjectId;
        //this.mui.alert(this.subjectId);
        //console.log(this.showLoading);
        this.mui.showLoading("正在....加载..", "div");
        // setTimeout(function () {
        //     this.mui.hideLoading(function () {
        //         alert("老子已经关闭了!")
        //     }, 5000)
        // })
    },

    methods: {
        //跳转到试题列表
        toList: function (chapterId) {
            this.$router.push({
                path: "List",
                query: {
                    chapterId: chapterId
                }
            });
        }

    }
}
</script>

<style scoped>

</style>
