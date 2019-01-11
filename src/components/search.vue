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
            <!-- search-popup -->
            <li class="nav-item active">
              <router-link
                class="nav-link"
                to="/ค้นหา"
              >ค้นหา</router-link>
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
                >ภาพมุมกว้าง (Perspective Image)</router-link>
                <router-link
                  :to="{ name: 'AllContent', params: {  limit: 200, nameContent:'', idCategory: 4  } }"
                  class="dropdown-item"
                >หนังสืออิเล็กทรอนิกส์ (Electronic book)</router-link>
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
      <div class="h1-search-header">
        <h1><i class="fas fa-search"></i> ค้นหา</h1>
      </div>
      <div class="container bt-footet-fix">
        <input
          type="text"
          class="form-control search-content"
          id="exampleFormControlInput1"
          placeholder="กรุณาใส่คำที่ต้องการค้นหา"
          v-model="search"
        >

        <div class="row">
          <div
            class="col-md-4"
            v-for="(item,index) in filteredContent"
            :key="index"
          >
            <div
              class="card"
              style="width: auto;"
            >
              <img
                v-bind:src="setUrlImage(item.imageContent)"
                class="card-img-top"
                alt="Card image cap"
              >
              <div class="card-body">
                <h5 class="card-title">{{item.nameContent}}</h5>
                <p class="date-card">
                  <i class="far fa-calendar-alt"></i>
                  {{ item.createTime | changeDateFilter}}
                </p>
                <p class="card-text">{{item.scriptContent}}</p>
                <button
                  class="btn btn-primary btn-center"
                  @click.stop.prevent="clickContent(item.idContent,item.idCategory)"
                >อ่านเพิ่มเติม</button>
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
      info: [],
      search: ""
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

    var call = apiUtil.callService.doPost(
      globalUtil.SERVICES.CONTENT.URL_SEARCH_CONTENT
    );

    apiUtil.callService.validateResponse(
      call,
      function(response) {
        this.info = response.resultData;
      }.bind(this)
    );
  },
  methods: {
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
  },
  computed: {
    filteredContent: function() {
      return this.info.filter(item => {
        return item.nameContent
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.bg-bb {
  background-color: #648dff;
}
body {
  font-family: "Kanit", sans-serif !important;
}
nav a {
  color: #fff !important;
}
nav ul li {
  background-color: transparent;
}
nav ul li:hover {
  background-color: #84a5ff;
  transition: all 0.3s;
}
nav ul li a:hover {
  color: #dadada !important;
  transition: all 0.3s;
}
.mar-left {
  margin-left: auto !important;
}
.pdd-z {
  padding-top: 0;
  padding-bottom: 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
}
nav ul li a {
  padding: 1.5rem 1rem !important;
}
nav ul li {
  font-size: 21px;
}
.active {
  background-color: #84a5ff;
}
/* .h-450{
  height: 450px;
} */
.mar-top {
  margin-top: 55px;
}
.h1-resize h1 {
  font-size: 45px;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  padding-bottom: 10px;
}
.h1-resize h1:after {
  content: "";
  display: block;
  border: 4px solid #648dff;
  width: 102px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 45px;
  margin-top: 10px;
}
.container-w {
  display: block;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  padding: 15px 80px;
}
.content-rec-video {
  margin-top: 45px;
  background-color: #f1f1f1;
  padding: 35px 80px;
}
.marr-topp {
  margin-top: 45px;
}
img {
  display: block;
  width: auto;
  max-width: 100%;
}
footer {
  background-color: #648dff;
  padding: 18px;
  color: #fff;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
  /* margin-top: 30px;
      position: fixed; */
  width: 100%;
  /* bottom: 0; */
}
.color-fff-nav a {
  color: #333 !important;
  border-bottom: 1px solid #ccc4c4;
  padding: 10px 15px !important;
}
.color-fff-nav a:nth-child(12) {
  border-bottom: none !important;
}
.hover-image-zoom {
  position: relative;
  overflow: hidden;
}
.hover-image-zoom img {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.hover-image-zoom:hover img {
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
}
.card {
  box-shadow: 0px 3px 20px 0 rgba(0, 0, 0, 0.075);
  transition: 0.3s;
}
.card:hover {
  box-shadow: 0px 3px 50px 0 rgba(0, 0, 0, 0.075);
  transform: translateY(-5px);
  transition: 0.3s;
}
.card-body {
  text-align: left;
}
.date-card {
  font-size: 13px;
  color: #a5a5a5;
}
</style>
