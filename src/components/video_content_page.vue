<template>
<div id="callaxois">
  <nav class="navbar navbar-expand-lg navbar-light bg-bb pdd-z">
  <a class="navbar-brand" href="#">LOGO</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mar-left">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">หน้าหลัก <span class="sr-only">(current)</span></router-link>
      </li>    
      <!-- search-popup -->    
  <li class="nav-item">
        <a class="nav-link" href="javascrip:void(0);" data-toggle="modal" data-target="#exampleModalCenter">ค้นหา</a>
      </li>
      <!-- close-search-popup -->
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="javascrip:void(0);" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          หมวดหมู่
        </a>
        <div class="dropdown-menu color-fff-nav" aria-labelledby="navbarDropdown">          
         <router-link class="dropdown-item" to="/Animation">แอนิเมชั่น(Animation)</router-link>
          <router-link class="dropdown-item" to="/Cartoon">การ์ตูน(Cartoon)</router-link>           
          <router-link class="dropdown-item" to="/Ebook">หนังสืออิเล็กทรอนิกส์(Electronic book)</router-link>
          <router-link class="dropdown-item" to="/Infographics">อินโฟกราฟิก (Infographics)</router-link>
          <router-link class="dropdown-item" to="/Motiongraphics">โมชั่นกราฟิก (Motiongraphics)</router-link>
           <router-link class="dropdown-item" to="/Art">เทคโนโลยีเออาร์ (Augmentation Reality Technology)</router-link> 
           <router-link class="dropdown-item" to="/VR">ความจริงเสมือน (Virtual reality)</router-link> 
            <router-link class="dropdown-item" to="/video">วีดิทัศน์ (Video)</router-link> 
            <router-link class="dropdown-item" to="/Dimage">ภาพมุมมองสามมิติ (3D perspective image)</router-link>             
        </div>
      </li>         
    </ul>
    </div>
</nav>
<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">       
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="กรุณาใส่คำที่ต้องการค้นหา">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">ปิด</button>
        <button type="button" class="btn btn-primary"><i class="fas fa-search"></i> ค้นหา</button>
      </div>
    </div>
  </div>
</div>
<!-- Close-Modal -->
<div class="bg-pos-head">
  <img v-bind:src="imageLink2"  class="img-head-content" alt="รูปภาพเนื้อหา" style=" width: 100% "/> 
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
      imagecontent: 'https://www.health-th.com/wp-content/uploads/2017/11/beetroot.jpg',
      imageLink2: 'https://natgeo.imgix.net/factsheets/thumbnails/Ulurugoogle.jpg?auto=compress,format&w=1024&h=560&fit=crop',
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
