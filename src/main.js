// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mui from './assets/js/mui.js'
import './assets/css/mui.css'

//import './assets/js/sliders.js'

import './assets/js/loading.js'
import './assets/css/loading.css'
Vue.config.productionTip = false
    //console.log(muiLoading)
    //Vue.prototype.muiLoading = new muiLoading()

Vue.prototype.mui = mui

/* eslint-disable no-new */
new Vue({
        el: '#app',
        router,
        components: { App },
        template: '<App/>'
    })
    //mui.init();