import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/List'
import Subject from '@/components/Subject'
import Chapter from '@/components/Chapter'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/List',
        name: 'List',
        description: "试题列表",
        component: List
    }, {
        path: '/Subject',
        name: 'Subject',
        description: "科目列表",
        component: Subject
    }, {
        path: '/Chapter',
        name: 'Chapter',
        description: "章节列表",
        component: Chapter
    }]
})