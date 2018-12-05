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
          <li class="nav-item">
            <a class="nav-link" href="javascrip:void(0);">ค้นหา</a>
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
            <div class="dropdown-menu color-fff-nav" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/Animation">แอนิเมชั่น(Animation)</router-link>
              <router-link class="dropdown-item" to="/Cartoon">การ์ตูน(Cartoon)</router-link>
              <router-link class="dropdown-item" to="/Ebook">หนังสืออิเล็กทรอนิกส์(Electronic book)</router-link>
              <router-link class="dropdown-item" to="/Infographics">อินโฟกราฟิก (Infographics)</router-link>
              <router-link class="dropdown-item" to="/Motiongraphics">โมชั่นกราฟิก (Motiongraphics)</router-link>
              <router-link
                class="dropdown-item"
                to="/Art"
              >เทคโนโลยีเออาร์ (Augmentation Reality Technology)</router-link>
              <router-link class="dropdown-item" to="/VR">ความจริงเสมือน (Virtual reality)</router-link>
              <router-link class="dropdown-item" to="/video">วีดิทัศน์ (Video)</router-link>
              <router-link
                class="dropdown-item"
                to="/Dimage"
              >ภาพมุมมองสามมิติ (3D perspective image)</router-link>
              <a class="dropdown-item" href="http://tayaitourism.com/admin/">เข้าสู่ระบบ</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div class="bg-pos-head">
      <img
        v-bind:src="setUrlImageProfile(info.imageContent)"
        class="img-head-content"
        alt="รูปภาพเนื้อหา"
        style=" width: 100% "
      >
    </div>
    <a
      v-show="info.idCategory == '4'"
      v-bind:href="setLink(info.fileEBookContent)"
      target="_blank"
      class="btn-download-ebook"
    >
      <i class="fas fa-download"></i> ดาวน์โหลด Ebook
    </a>
    <div class="container text-left-al font-size-old">
      <h1>{{info.nameContent}}</h1>

      <ckeditor
        type="classic"
        v-model="info.detailContent"
        id="ck-create-update-content"
        :readonly="true"
      ></ckeditor>
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

export default {
  data() {
    return {
           info: {}
    };
  },
  mounted() {
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
        this.info = response.resultData;
      }.bind(this)
    );
  },
  methods: {
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

        uiUtil.bus.post(constantUtil.EVENT.COMMMON.GLOBALLOADED);
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
