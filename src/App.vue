<template>
  <div id="app">
    <div v-show="isLoading">
      <div class="loading" style="width: 100vw;">
        <div
          class="d-flex justify-content-center"
          style="height: 100vh; opacity: 1; background: #fff;"
        >
          <div
            class="align-self-center"
            align="center"
          >
            <div class="lds-css ng-scope">
              <div class="lds-double-ring">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import constantUtil from "./common/constantUtil/index";
import uiUtil from "./common/uiUtil/index";

export default {
  name: "App",
  data() {
    return {
      isLoading: true,
      stackCall: 0
    };
  },
  created() {
    uiUtil.bus.on(constantUtil.EVENT.COMMMON.GLOBALLOADING, flag => {
      this.isLoading = true;
      if (flag != undefined) {
        if (this.stackCall <= 0) {
          this.stackCall = 1;
        } else {
          this.stackCall += flag;
        }
      } else {
        if (this.stackCall < 0) {
          this.stackCall = 1;
        } else {
          this.stackCall++;
        }
      }
      console.log("GLOBALLOADING = ", this.stackCall);
    });
    uiUtil.bus.on(constantUtil.EVENT.COMMMON.GLOBALLOADED, flag => {
      // if (this.stackCall < 0) {
      //   this.stackCall = 0;
      // }
      if (this.stackCall == 0) {
        this.isLoading = false;
      }
      console.log("GLOBALLOADED = ", this.stackCall);
    });
    uiUtil.bus.on(constantUtil.EVENT.COMMMON.GLOBALLOADED_OPA, flag => {
      this.isLoading = false;
      console.log("GLOBALLOADED = ", this.stackCall);
    });
  }
};
</script>

<style>
@import "assets/css/style.css";

@import url("https://fonts.googleapis.com/css?family=Sriracha");

.text-logo {
  font-family: "Sriracha", sans-serif;
  font-size: calc(1em + 1vw);
  font-weight: bold;
  padding-left: 10px;
  text-shadow: 2px 2px #0e1889;
  letter-spacing: 2px;
}

#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.loading {
  position: fixed;
  z-index: 999;
  left: 10;
  /* overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0; */
}

/* Transparent Overlay */
.loading:before {
  z-index: 99;
  content: "";
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: auto;
  height: 100%;
  background-color: #fff;
  /* opacity: 0.5; */
}

@keyframes lds-double-ring {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-webkit-keyframes lds-double-ring {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes lds-double-ring_reverse {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
@-webkit-keyframes lds-double-ring_reverse {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
.lds-double-ring {
  position: relative;
}
.lds-double-ring div {
  position: absolute;
  width: 160px;
  height: 160px;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  border: 10px solid #000;
  border-color: #648dff transparent #648dff transparent;
  -webkit-animation: lds-double-ring 2.4s linear infinite;
  animation: lds-double-ring 2.4s linear infinite;
}
.lds-double-ring div:nth-child(2) {
  width: 136px;
  height: 136px;
  top: 0px;
  left: 0px;
  border-color: transparent #99b4ff transparent #99b4ff;
  -webkit-animation: lds-double-ring_reverse 2.4s linear infinite;
  animation: lds-double-ring_reverse 2.4s linear infinite;
}
.lds-double-ring {
  width: 200px !important;
  height: 200px !important;
  -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
  transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
}
.card-loading-mobile {
  display: none;
}
/* @media (max-width: 992px) {
  .loading {
    height: 50% !important;
    width: 50% !important;
  }
} */
</style>
