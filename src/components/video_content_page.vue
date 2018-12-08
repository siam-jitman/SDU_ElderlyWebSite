<template>
  <div id="callaxois">
    <nav class="navbar navbar-expand-lg navbar-light bg-bb pdd-z">
      <a class="navbar-brand" href="#">LOGO</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mar-left">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              หน้าหลัก
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <!-- search-popup -->
           <li class="nav-item">            
            <router-link  class="nav-link" to="/ค้นหา">ค้นหา</router-link>
          </li>
          <!-- close-search-popup -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="javascrip:void(0);"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >หมวดหมู่</a>
            <div class="dropdown-menu color-fff-nav" aria-labelledby="navbarDropdown">
              <router-link :to="{ name: 'AllContent', params: { limit: 200, nameContent:'', idCategory: 1  } }" class="dropdown-item">แอนิเมชั่น(Animation)</router-link>
              <router-link :to="{ name: 'AllContent', params: { limit: 200, nameContent:'', idCategory: 2  } }" class="dropdown-item">การ์ตูน(Cartoon)</router-link>
              <router-link :to="{ name: 'AllContent', params: { limit: 200, nameContent:'', idCategory: 4  } }" class="dropdown-item">หนังสืออิเล็กทรอนิกส์(Electronic book)</router-link>
              <router-link :to="{ name: 'AllContent', params: { limit: 200, nameContent:'', idCategory: 5  } }" class="dropdown-item">อินโฟกราฟิก (Infographics)</router-link>
              <router-link :to="{ name: 'AllContent', params: { limit: 200, nameContent:'', idCategory: 7  } }" class="dropdown-item">โมชั่นกราฟิก (Motiongraphics)</router-link>
              <router-link :to="{ name: 'AllContent', params: { limit: 200, nameContent:'', idCategory: 6  } }" class="dropdown-item">เทคโนโลยีเออาร์ (Augmentation Reality Technology)</router-link>
              <router-link :to="{ name: 'AllContent', params: { limit: 200, nameContent:'', idCategory: 7  } }" class="dropdown-item">ความจริงเสมือน (Virtual reality)</router-link>
              <router-link :to="{ name: 'AllContent', params: { limit: 200, nameContent:'', idCategory: 8  } }" class="dropdown-item">วีดิทัศน์ (Video)</router-link>
              <router-link :to="{ name: 'AllContent', params: { limit: 200, nameContent:'', idCategory: 9  } }" class="dropdown-item">ภาพมุมมองสามมิติ (3D perspective image)</router-link>
              <a class="dropdown-item" href="http://tayaitourism.com/admin/">เข้าสู่ระบบ</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>   
    <div class="video-header-content">
      <div class="embed-responsive embed-responsive-21by9">
        <iframe class="embed-responsive-item" :src="setUrlVideo(info.urlContent)" allowfullscreen></iframe>
      </div>
    </div>   

    <div class="container text-left-al font-size-old">
      <h1>{{info.nameContent}}</h1>
      <div class="date-content-all">
      <i class="far fa-calendar-alt"></i>      
      {{ info.createTime | changeDateFilter}}
    </div>
      <ckeditor
        type="classic"
        v-model="info.detailContent"
        id="ck-create-update-content"
        :readonly="true"
      ></ckeditor>
      <!-- <div class="embed-responsive embed-responsive-16by9">
        <video controls autoplay class="video-w">
          <source :src="setUrlVideo(info.urlContent)" type="video/mp4">
        </video>
      </div>-->
    </div>
    <footer>
      <h4 style="font-size: 18px;">Copyright © 2018</h4>
    </footer>
  </div>
</template>
<script>
import apiUtil from "../common/apiUtil/index";
import uiUtil from "../common/uiUtil/index";
import constantUtil from "../common/constantUtil/index";
import globalUtil from "../common/globalUtil/index";
import dataUtil from "../common/dataUtil/index";
import storageUtil from "../common/storageUtil/index";
import validateUtil from "../common/validateUtil/index";
import VueMoment from "vue-moment";

var moment = require("moment");

export default {
  data() {
    return {
      info: {}
    };
  },
  filters: {
    changeDateFilter: function(value) {
      moment.locale("th");
      return moment(value).format("llll");
    }
  },
  mounted() {
    var bodyParams = {
      idContent: this.$route.params.idContent
    };

    var call = apiUtil.callService.doPost(
      globalUtil.SERVICES.CONTENT.URL_FIND_COTENT_BY_ID,
      bodyParams
    );

    apiUtil.callService.validateResponse(
      call,
      function(response) {
        this.info = response.resultData;
      }.bind(this)
    );
  },
  methods: {
    setUrlVideo(url) {
      return globalUtil.SERVICES.URI_VIDEO + url;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.ck.ck-reset_all,
.ck.ck-reset_all * {
  display: none !important;
}
.ck.ck-editor__main > .ck-editor__editable:not(.ck-focused) {
  border: none !important;
}
.ck-content blockquote {
  border: none !important;
}
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover {
  outline-color: transparent !important;
}
.ck .ck-widget:hover {
  outline-color: transparent !important;
}
.ck-content .image > figcaption {
  display: none !important;
}
</style>
