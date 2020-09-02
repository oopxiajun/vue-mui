<template>
<div>
</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    created() {
        //this.mui.alert("你好");
        this.mui.prompt("", "输入车牌", "请输入车牌");
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped> 
</style>
