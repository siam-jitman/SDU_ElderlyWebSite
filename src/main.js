// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLodash from 'vue-lodash'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import faSpinner from '@fortawesome/fontawesome-free-solid'
// import generalHelpers from './helper/general-helpers.js'

import AlertDialog from './common/components/AlertDialog/Main.vue'
// import LabelFrontInput from './common/components/LabelFrontInput/LabelFrontInput.vue'

Vue.config.productionTip = false
fontawesome.library.add(brands, faSpinner)

//Others component (css or scss)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//override or common themes (css or scss)
import './assets/scss/themes/index.scss';
import './assets/scss/app.scss';


Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.use(VueLodash, {
  name: '_'
}) // options is optional

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.component('common-alertdialog',AlertDialog);

export const bus = new Vue();

/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
