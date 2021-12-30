import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from "vue-router";
import vuetify from './plugins/vuetify'
import App from './App.vue';
import VueI18n from 'vue-i18n';
import i18n from './i18n';
import router from "./router/router";
import store from "./store/store";
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'

Vue.config.productionTip = false;

//vue-party
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueI18n);

const _store = store();
const _router = router();

new Vue({
    router: _router,
    store: _store,
    vuetify,
    i18n,
    render: h => h(App),
}).$mount('#app')
