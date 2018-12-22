<template>
  <div id="callaxois">
    <div class="main-content">
      <nav class="navbar navbar-expand-lg navbar-light bg-bb pdd-z">
        <a
          class="navbar-brand"
          href="#"
        ><img
            src="http://tayaitourism.com/public/image/logo/logo.png"
            alt="tayaitourism"
            class="img-logo"
          ></a>
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
        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mar-left">
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/"
              >
                หน้าหลัก
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/ค้นหา"
              >ค้นหา</router-link>
            </li>
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
              <div
                class="dropdown-menu color-fff-nav"
                aria-labelledby="navbarDropdown"
              >
                <router-link
                  :to="{ name: 'AllContent', params: {  limit: 200, nameContent:'', idCategory: 2  } }"
                  class="dropdown-item"
                >ภาพนิ่ง (Slides)</router-link>
                <router-link
                  :to="{ name: 'AllContent', params: { limit: 200, nameContent:'', idCategory: 8  } }"
                  class="dropdown-item"
                >วีดิทัศน์ (Video)</router-link>
                <router-link
                  :to="{ name: 'AllContent', params: {  limit: 200, nameContent:'', idCategory: 3  } }"
                  class="dropdown-item"
                >ภาพเขียน (Drawing picture)</router-link>
                <router-link
                  :to="{ name: 'AllContent', params: {  limit: 200, nameContent:'', idCategory: 1  } }"
                  class="dropdown-item"
                >ภาพเคลื่อนไหว 2 มิติ (2D Animation)</router-link>
                <router-link
                  :to="{ name: 'AllContent', params: {  limit: 200, nameContent:'', idCategory: 6  } }"
                  class="dropdown-item"
                >ภาพเคลื่อนไหว 3 มิติ (3D Animation)</router-link>
                <router-link
                  :to="{ name: 'AllContent', params: {  limit: 200, nameContent:'', idCategory: 5  } }"
                  class="dropdown-item"
                >อินโฟกราฟิก (Infographics)</router-link>
                <router-link
                  :to="{ name: 'AllContent', params: {  limit: 200, nameContent:'', idCategory: 7  } }"
                  class="dropdown-item"
                >โมชั่นกราฟิก (Motiongraphics)</router-link>
                <router-link
                  :to="{ name: 'AllContent', params: { limit: 200, nameContent:'', idCategory: 9  } }"
                  class="dropdown-item"
                >ภาพมุมมองสามมิติ (3D perspective image)</router-link>
                <router-link
                  :to="{ name: 'AllContent', params: {  limit: 200, nameContent:'', idCategory: 4  } }"
                  class="dropdown-item"
                >หนังสืออิเล็กทรอนิกส์ (Electronic book)</router-link>
                <a
                  class="dropdown-item"
                  href="http://tayaitourism.com/admin/"
                >เข้าสู่ระบบ</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div
        class="image-header-function-bg"
        :style="{ 'backgroundImage': 'url(\'' + setUrlImageProfile(info.imageContent) + '\')' }"
      ></div>
      <!-- <div class="bg-pos-head">
      <img
        v-bind:src="setUrlImageProfile(info.imageContent)"
        class="img-head-content"
        alt="รูปภาพเนื้อหา"
        style=" width: 100% "
      >
    </div> -->
      <a
        v-show="info.idCategory == '4'"
        v-bind:href="setLink(info.fileEBookContent)"
        target="_blank"
        class="btn-download-ebook"
      >
        <i class="fas fa-book"></i> เปิดหนังสืออิเล็กทรอนิกส์
      </a>
      <div class="container text-left-al font-size-old bt-footet-fix">
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
          ref="ckeditorContent"
        ></ckeditor>
      </div>
    </div>
    <footer>
      <h4 style="font-size: 18px;">คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยสวนดุสิต</h4>
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
import "../assets/css/style.css";

var moment = require("moment");

export default {
  data() {
    return {
      info: {},
      eventsLog: ""
    };
  },
  filters: {
    changeDateFilter: function(value) {
      moment.locale("th");
      return moment(value).format("llll");
    }
  },
  created() {
    uiUtil.bus.post(constantUtil.EVENT.COMMMON.GLOBALLOADING);
  },
  mounted() {
    console.log(this.$refs);
    window.scrollTo(0, 0);

    this.remaveMediaDropdownInCkEditor();

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
        uiUtil.bus.post(constantUtil.EVENT.COMMMON.GLOBALLOADING);
        this.info = response.resultData;

        uiUtil.bus.post(constantUtil.EVENT.COMMMON.GLOBALLOADED_OPA);
      }.bind(this)
    );
  },
  methods: {
    ckReady() {
      console.log("ckReady");
      // uiUtil.bus.post(constantUtil.EVENT.COMMMON.GLOBALLOADED_OPA);
    },
    setLink(name) {
      return globalUtil.SERVICES.URI_EBOOK + name;
    },
    setUrlImageProfile(name) {
      return globalUtil.SERVICES.URI_IMAGE_PROFILE + name;
    },
    setUrlVideo(url) {
      return globalUtil.SERVICES.URI_VIDEO + url;
    },
    remaveMediaDropdownInCkEditor() {
      setTimeout(function() {
        // window.document
        //   .getElementsByClassName("ck ck-dropdown")[0]
        //   .setAttribute("style", "display: none");

        window.document
          .getElementsByClassName("ck ck-sticky-panel__content")[0]
          .setAttribute("style", "display: none");

        // uiUtil.bus.post(constantUtil.EVENT.COMMMON.GLOBALLOADED);
      }, 0);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.ck.ck-editor__main > .ck-editor__editable:not(.ck-focused) {
  border: none !important;
}
.ck-content blockquote {
  border: none;
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
