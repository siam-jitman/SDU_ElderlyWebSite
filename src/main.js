// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueLodash from 'vue-lodash'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import VueCkeditor from 'vue-ckeditor5'

import "./assets/css/style.scss";

Vue.config.productionTip = false
const options = {
  editors: {
    classic: ClassicEditor
  },
  name: 'ckeditor'
}

Vue.use(VueAxios, axios)
Vue.use(VueLodash, {
  name: '_'
})

Vue.use(VueCkeditor.plugin, options)
export const bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
