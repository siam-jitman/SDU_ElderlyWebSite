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
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mar-left">
          <li class="nav-item">
            <router-link class="nav-link" to="/">หน้าหลัก
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
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div class="content-all text-left-al">
      <div class="h1-head-cus">
        <h1>โมชั่นกราฟิก (Motiongraphics)</h1>
      </div>
      <div class="container">
      <div class="row">
        <div class="col-md-4" style="margin-bottom: 25px;">
          <div class="embed-responsive embed-responsive-16by9">
            <video controls class="video-w">
              <source src="../assets/video1.mp4" type="video/mp4">
            </video>
          </div>
          <h3>ชีวิตมีสุขได้ เพียงแค่ ‘ไม่ทุกข์’</h3>
        </div>
        <div class="col-md-4" style="margin-bottom: 25px;">
          <div class="embed-responsive embed-responsive-16by9">
            <video controls class="video-w">
              <source src="../assets/video1.mp4" type="video/mp4">
            </video>
          </div>
          <h3>ชีวิตมีสุขได้ เพียงแค่ ‘ไม่ทุกข์’</h3>
        </div>
        <div class="col-md-4" style="margin-bottom: 25px;">
          <div class="embed-responsive embed-responsive-16by9">
            <video controls class="video-w">
              <source src="../assets/video1.mp4" type="video/mp4">
            </video>
          </div>
          <h3>ชีวิตมีสุขได้ เพียงแค่ ‘ไม่ทุกข์’</h3>
        </div>
        <!-- content2 -->
        <div class="col-md-4" style="margin-bottom: 25px;">
          <div class="embed-responsive embed-responsive-16by9">
            <video controls class="video-w">
              <source src="../assets/video1.mp4" type="video/mp4">
            </video>
          </div>
          <h3>ชีวิตมีสุขได้ เพียงแค่ ‘ไม่ทุกข์’</h3>
        </div>
        <div class="col-md-4" style="margin-bottom: 25px;">
          <div class="embed-responsive embed-responsive-16by9">
            <video controls class="video-w">
              <source src="../assets/video1.mp4" type="video/mp4">
            </video>
          </div>
          <h3>ชีวิตมีสุขได้ เพียงแค่ ‘ไม่ทุกข์’</h3>
        </div>
        <div class="col-md-4" style="margin-bottom: 25px;">
          <div class="embed-responsive embed-responsive-16by9">
            <video controls class="video-w">
              <source src="../assets/video1.mp4" type="video/mp4">
            </video>
          </div>
          <h3>ชีวิตมีสุขได้ เพียงแค่ ‘ไม่ทุกข์’</h3>
        </div>
      </div>
      </div>
    </div>
    <footer>
      <h4 style="font-size: 18px;">Copyright © 2018</h4>
    </footer>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      imagecontent:
        "https://www.health-th.com/wp-content/uploads/2017/11/beetroot.jpg",
      imageLink2:
        "https://natgeo.imgix.net/factsheets/thumbnails/Ulurugoogle.jpg?auto=compress,format&w=1024&h=560&fit=crop",
      info: []
    };
  },
  mounted() {
    var self = this;
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(function(res) {
        self.info = res.data;
        console.log("Data: ", res.data);
      })
      .catch(function(error) {
        console.log("Error: ", error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
