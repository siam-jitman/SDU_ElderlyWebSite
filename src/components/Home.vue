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
<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
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
 <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 h-450" v-bind:src="imagesilde1" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 h-450" v-bind:src="imagesilde2" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 h-450" v-bind:src="imagesilde3" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div class="mar-top h1-resize">
<h1>เรื่องล่าสุด</h1>
<p>{{ info.time.updated }}</p>
<p>{{ info.bpi.EUR.description}}</p>
<div class="container-w">
<div class="row">
  <div class="col-md-4">
    <div class="card" style="width: auto;">
  <img v-bind:src="imageLink1"  class="card-img-top" alt="Card image cap"/> 
  <div class="card-body">
    <h5 class="card-title">{{info.chartName}}</h5>
    <p class="card-text">{{info.disclaimer}}</p>
    <router-link class="btn btn-primary" to="/content">อ่านเพิ่มเติม</router-link>    
  </div>
</div>
  </div>
  <div class="col-md-4">
    <div class="card" style="width: auto;">
  <img v-bind:src="imageLink1"  class="card-img-top" alt="Card image cap"/>  
  <div class="card-body">
    <h5 class="card-title">{{info.chartName}}</h5>
    <p class="card-text">{{info.disclaimer}}</p>
    <router-link class="btn btn-primary" to="/content">อ่านเพิ่มเติม</router-link>   
  </div>
</div>
  </div>
  <div class="col-md-4">
    <div class="card" style="width: auto;">
 <img v-bind:src="imageLink1"  class="card-img-top" alt="Card image cap"/> 
  <div class="card-body">
    <h5 class="card-title">{{info.chartName}}</h5>
    <p class="card-text">{{info.disclaimer}}</p>
    <router-link class="btn btn-primary" to="/content">อ่านเพิ่มเติม</router-link>   
  </div>
</div>
  </div>
</div>
</div>
</div>
<div class="content-rec-video h1-resize">
  <h1>วีดีโอแนะนำ</h1>
  <div class="row marr-topp">
    <div class="col-md-4">
      <div class="embed-responsive embed-responsive-16by9">
<video controls class="video-w">
    <source src="../assets/video1.mp4" type="video/mp4">
  </video>
      </div>
      <h2>{{info.chartName}}</h2>
    </div>
    <div class="col-md-4">
      <div class="embed-responsive embed-responsive-16by9">
<video controls class="video-w">
    <source src="../assets/video1.mp4" type="video/mp4">
  </video>
      </div>
      <h2>{{info.chartName}}</h2>
    </div>
    <div class="col-md-4">
      <div class="embed-responsive embed-responsive-16by9">
<video controls class="video-w">
    <source src="../assets/video1.mp4" type="video/mp4">
  </video>
      </div>
      <h2>{{info.chartName}}</h2>
    </div>    
  </div>
</div>
<div class="mar-top h1-resize">
  <h1>รูปภาพกิจกรรม</h1>
  <div class="container-w">
    <div class="row">
      <div class="col-md-4" style="margin-bottom: 25px;">
        <div class="hover-image-zoom">
        <img v-bind:src="imageLink1"/> 
        </div>
      </div>
      <div class="col-md-4" style="margin-bottom: 25px;">
        <div class="hover-image-zoom">
        <img v-bind:src="imageLink2"/> 
        </div>
      </div>
      <div class="col-md-4" style="margin-bottom: 25px;">
        <div class="hover-image-zoom">
        <img v-bind:src="imageLink1"/> 
        </div>
      </div>
      <div class="col-md-4" style="margin-bottom: 25px;">
        <div class="hover-image-zoom">
        <img v-bind:src="imageLink2"/> 
        </div>
      </div>
      <div class="col-md-4" style="margin-bottom: 25px;">
        <div class="hover-image-zoom">
        <img v-bind:src="imageLink1"/> 
        </div>
      </div>
      <div class="col-md-4" style="margin-bottom: 25px;">
        <div class="hover-image-zoom">
        <img v-bind:src="imageLink2"/>    
        </div>     
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
      imagesilde1:'https://images.pexels.com/photos/995939/pexels-photo-995939.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imagesilde2:'https://images.pexels.com/photos/913215/pexels-photo-913215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imagesilde3:'https://images.pexels.com/photos/995939/pexels-photo-995939.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageLink1:'https://natgeo.imgix.net/factsheets/thumbnails/Ulurugoogle.jpg?auto=compress,format&w=1024&h=560&fit=crop',
      imageLink2: 'https://natgeo.imgix.net/factsheets/thumbnails/Ulurugoogle.jpg?auto=compress,format&w=1024&h=560&fit=crop',
      info: [],
      urlHref:'www.google.com'
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
.h1-resize h1:after{
    content: "";
    display: block;
    border: 4px solid #648dff;
    width: 102px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 45px;
    margin-top: 10px;
}
.container-w{
    display: block;
    width: auto;
    margin-left: auto;
    margin-right: auto;
    padding: 15px 80px;
}
.content-rec-video{
  margin-top: 45px;
  background-color: #f1f1f1;
  padding: 35px 80px;
}
.marr-topp{
  margin-top: 45px;
}
img{
  display: block;
  width: auto;
  max-width: 100%;
}
footer{
  background-color: #648DFF;
  padding: 18px;
  color: #fff;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
  margin-top: 30px;
 }
 .color-fff-nav a{
   color: #333 !important;
   border-bottom: 1px solid #CCC4C4;
   padding: 10px 15px !important;
 }
 .color-fff-nav a:nth-child(9){
  border-bottom: none !important;
 }
 .hover-image-zoom {
   position: relative;
   overflow: hidden;
 }
.hover-image-zoom img {
	-webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}
.hover-image-zoom:hover img {
	-webkit-transform: scale(1.3);
	transform: scale(1.3);
}
.card{
      box-shadow: 0px 3px 20px 0 rgba(0,0,0,0.075);
      transition: .3s;
}
.card:hover{
      box-shadow: 0px 3px 50px 0 rgba(0,0,0,0.075);
    transform: translateY(-5px);
    transition: .3s;
}

</style>
