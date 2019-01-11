<template>
  <div id="callaxois">
    <div class="main-content">
      <nav class="navbar navbar-expand-lg navbar-light bg-bb pdd-z">
        <a class="navbar-brand" href="#">
          <table>
            <tr>
              <td>
                <img
                  src="http://tayaitourism.com/public/image/logo/logo.png"
                  alt="tayaitourism"
                  class="img-logo"
                ></td>
              <td><span class="text-logo">ตา<span style="color: #ff8ef6">ยาย</span>ท่องเที่ยว</span></td>
            </tr>
          </table>
        </a>
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
                <div
                  @click.stop.prevent="clickdropdowncontentlist(2)"
                  class="dropdown-item cur line-dropdown-list"
                >ภาพนิ่ง (Slides)</div>
                <div
                  @click.stop.prevent="clickdropdowncontentlist(8)"
                  class="dropdown-item cur line-dropdown-list"
                >วีดิทัศน์ (Video)</div>
                <div
                  @click.stop.prevent="clickdropdowncontentlist(3)"
                  class="dropdown-item cur line-dropdown-list"
                >ภาพเขียน (Drawing picture)</div>
                <div
                  @click.stop.prevent="clickdropdowncontentlist(1)"
                  class="dropdown-item cur line-dropdown-list"
                >ภาพเคลื่อนไหว 2 มิติ (2D Animation)</div>
                <div
                  @click.stop.prevent="clickdropdowncontentlist(6)"
                  class="dropdown-item cur line-dropdown-list"
                >ภาพเคลื่อนไหว 3 มิติ (3D Animation)</div>
                <div
                  @click.stop.prevent="clickdropdowncontentlist(5)"
                  class="dropdown-item cur line-dropdown-list"
                >อินโฟกราฟิก (Infographics)</div>
                <div
                  @click.stop.prevent="clickdropdowncontentlist(7)"
                  class="dropdown-item cur line-dropdown-list"
                >โมชั่นกราฟิก (Motiongraphics)</div>
                <div
                  @click.stop.prevent="clickdropdowncontentlist(9)"
                  class="dropdown-item cur line-dropdown-list"
                >ภาพมุมกว้าง (Perspective Image)</div>
                <div
                  @click.stop.prevent="clickdropdowncontentlist(4)"
                  class="dropdown-item cur line-dropdown-list"
                >หนังสืออิเล็กทรอนิกส์(Electronic book)</div>
                <a href="https://thai.tourismthailand.org/" class="dropdown-item">การท่องเที่ยวแห่งประเทศไทย</a>
                <a href="http://www.dusit.ac.th/" class="dropdown-item">มหาวิทยาลัยสวนดุสิต</a>
                <a
                  class="dropdown-item dis-mome-mobile-menu"
                  href="http://tayaitourism.com/admin/"
                >เข้าสู่ระบบ</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container bt-footet-fix">
        <div class="marr-top-all-content">
          <div class="row">
            <div
              class="col-md-4"
              v-for="(items,index) in info"
              :key="index"
            >
              <div
                class="card"
                style="width: auto;"
              >
                <img
                  v-bind:src="setUrlImage(items.imageContent)"
                  class="card-img-top"
                  alt="Card image cap"
                >
                <div class="card-body">
                  <h5 class="card-title">{{items.nameContent}}</h5>
                  <p class="date-card">
                    <i class="far fa-calendar-alt"></i>
                    {{ items.createTime | changeDateFilter}}
                  </p>
                  <p class="card-text">{{items.scriptContent}}</p>
                  <button
                    class="btn btn-primary btn-center"
                    @click.stop.prevent="clickContent(items.idContent,items.idCategory)"
                    v-bind:title="items.nameContent"
                  >อ่านเพิ่มเติม</button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    window.scrollTo(0, 0);

    this.callSearchContent();
  },
  methods: {
    callSearchContent(value) {
      var bodyParams = {
        limit: 2000,
        nameContent: "",
        idCategory: value == undefined ? this.$route.params.idCategory : value
      };
      var call = apiUtil.callService.doPost(
        globalUtil.SERVICES.CONTENT.URL_SEARCH_CONTENT,
        bodyParams
      );
      apiUtil.callService.validateResponse(
        call,
        function(response) {
          this.info = response.resultData;
        }.bind(this)
      );
    },
    clickdropdowncontentlist(value) {
      this.callSearchContent(value);
    },
    clickContent(id, idCategory) {
      if (idCategory == "1" || idCategory == "7" || idCategory == "8") {
        this.$router.push({
          name: "ContentVideo",
          params: { idContent: id }
        });
      } else {
        this.$router.push({
          name: "content",
          params: { idContent: id }
        });
      }
    },
    setUrlImage(name) {
      return globalUtil.SERVICES.URI_IMAGE_PROFILE + name;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.card-body{
    text-align: left;
}
.date-card{
    font-size: 13px;
    color: #a5a5a5;
}
</style>
