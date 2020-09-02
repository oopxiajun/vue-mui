<template>
<div>

    <ul class="mui-table-view">
        <li class="mui-table-view-cell" v-for="item in subjectList" @click="toChapter(item.id)">
            <a class="mui-navigate-right">{{item.name}}</a>
        </li>
    </ul>

</div>
</template>

<script>
export default {
    data() {
        return {
            subjectList: [{
                id: "1",
                name: "Subject 1"
            }, {
                id: "2",
                name: "Subject 2"
            }, {
                id: "3",
                name: "Subject 3"
            }, {
                id: "4",
                name: "Subject 4"
            }]
        }
    },
    methods: {
        //跳转到章节列表
        toChapter: function (subjectId) {
            this.$router.push({
                path: "Chapter",
                query: {
                    subjectId: subjectId
                }
            });
        }

    }
}
</script>

<style scoped>

</style>
