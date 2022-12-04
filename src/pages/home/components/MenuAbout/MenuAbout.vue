<template>
  <div class="MenuAboutWrap" :class="{
    'MenuAboutWrapColor': !detailShow,
    'MenuAboutWrapShadow': detailShow
  }">
    <div class="menuAboutTop">
      <div class="menuCoin"></div>
      <div class="menuText">{{pageData.post_title}}</div>
      <div class="rightCoin" @click="clickDetail()">
        <img :src="menuOffOther" alt="" class="rightCoinImg">
      </div>
    </div>
    <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeIn"
    >
    <div class="menuAboutMe" v-show="!detailShow" @click="clickDetailShow()"
         @mouseenter="aboutImg = false"
         @mouseleave="aboutImg = true"
    >
      <img :src="about" alt="" class="about" v-show="aboutImg">
      <img :src="tomo" alt="" class="about" v-show="!aboutImg">
    </div>
    </transition>

    <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeIn"
    >
    <div class="menuAboutMeDetail" v-show="detailShow">
      <div class="le1">
        <p class="p1" v-html="pageData.post_content"></p>
      </div>

      <div class="bt">
        <div class="leftImg">
          <img :src="about" alt="" class="about">
        </div>
        <div class="rightImg"  @click="clickDetail()">
          <img :src="shang" alt="" class="shang">
        </div>

      </div>
    </div>
    </transition>
  </div>
</template>
<script>
import {drag} from "../../../../assets/js/func";
import {api} from '@/service/api/api'


export default {
  name: 'MenuAbout',
  data() {
    return {
      menuOff: new URL('../../../../assets/image/menu-off.svg', import.meta.url).href,
      menuOffOther: new URL('../../../../assets/image/menu-off-other.png', import.meta.url).href,
      menuCont: new URL('../../../../assets/image/menuCont/menuCont.png', import.meta.url).href,
      about: new URL('../../../../assets/image/about/about.png', import.meta.url).href,
      tomo: new URL('../../../../assets/image/about/tomo.gif', import.meta.url).href,
      detailShow: false,
      xia: new URL('../../../../assets/image/xia.png', import.meta.url).href,
      shang: new URL('../../../../assets/image/shang.png', import.meta.url).href,

      le1Show: false,
      le2Show: false,

      pageData: {},
      aboutImg: true,


    }
  },

  mounted() {
    drag('.menuAboutTop', '.MenuAboutWrap')
    this.getData()
  },

  methods: {
    clickDetailShow() {
      this.detailShow = true
      if(!this.detailShow) {
        setTimeout(() => {
          drag('.menuAboutTop', '.MenuAboutWrap')
        },1500)
      } else {
        drag('.menuAboutTop', '.MenuAboutWrap',false)
      }
    },
    clickDetail() {
      this.detailShow = false
      if(!this.detailShow) {
        setTimeout(() => {
          drag('.menuAboutTop', '.MenuAboutWrap')
        },1500)
      } else {
        drag('.menuAboutTop', '.MenuAboutWrap',false)
      }
    },

    async getData() {
      let res = await api['page']({
        id: 1,
      })
      this.pageData = res.data.data
      console.log(this.pageData)
    },

    detailHide() {
      this.detailShow = false
    }
  }
}
</script>
<style scoped lang="less">
.MenuAboutWrap {
  width: 360px;
  position: absolute;
  top: 376px;
  left: 1128px;
  //right: 0;
  //bottom: 0;
  //margin: auto;
  background: #1A1A1A;
  border-radius: 5px;
  border: 1px solid #1A1A1A;
  //transition: all 0.5s;
  .menuAboutTop {
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    .menuCoin {
      width: 10px;
      height: 10px;
      background: #ED1C24;
      opacity: 1;
      border: 1px solid #fff;
      border-radius: 50%;
      margin-left: 15px;
      margin-right: 10px;
    }
    .menuText {
      font-size: 16px;
      font-family: PingFang SC-Medium, PingFang SC;
      font-weight: 500;
      flex: 1;
    }
    .rightCoin {
      width: 28px;
      height: 28px;
      float: right;
      border-left: 1px solid #fff;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      //background: #000;
      .rightCoinImg {
        width: 20px;
        height: 20px;
        color: #fff;
        transition: all 0.5s;
      }

    }
  }
  .menuAboutMe {
    width: 100%;
    height: 150px;
    cursor: pointer;
    .about {
      width: 300px;
      height: 72px;
      border-radius: 0px 0px 5px 5px;
      opacity: 1;
      margin-top: 36px;
      margin-left: 30px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .menuAboutMeDetail {
    width: 100%;
    .le1,.le2 {
      padding: 30px 20px 0 20px;
      box-sizing: border-box;
      p {
        margin-bottom: 5px;
      }
      .p1 {
        font-size: 14px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
        img {
          width: 12px;
          height: 12px;
          margin-left: 5px;
          margin-top: -2px;
          cursor: pointer;
        }
        /deep/ img {
          max-width: 90% !important;
          height: auto !important;
        }
      }
      .p2 {
        font-size: 12px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(255,255,255,0.5);
      }
      .text {
        margin-top: 20px;
        color: #fff;
      }
    }
    .le2 {
      margin-top: 30px;
    }
    .other {
      font-size: 12px;
      font-family: PingFang SC-Medium, PingFang SC;
      font-weight: 500;
      color: #fff;
      margin-top: 30px;
      .p1 {
        margin-bottom: 7px;
        font-size: 14px;
        span {
          color: #ED1C24;
        }
      }
      .p2 {
        font-size: 10px;
      }
    }
  }
  .bt {
    width: 100%;
    height: 80px;
    background: #000;
    border-top: 1px solid #fff;
    box-sizing: border-box;
    position: relative;
    .leftImg {
      width: 100px;
      height: 24px;
      position: absolute;
      top: 28px;
      left: 20px;
      .about {
        width: 100%;
        height: 100%;
      }
    }
    .rightImg {
      width: 25px;
      height: 25px;
      position: absolute;
      top: 28px;
      right: 22px;
      cursor: pointer;
      .shang {
        width: 100%;
        height: 100%;
      }

    }



  }

  &:hover {
    //background: #ED1C24;
  }
}


.MenuAboutWrapColor {

}
.MenuAboutWrapShadow {
  width: 440px;
  //box-shadow: 30px 30px 20px #3D3D3D;
  .rightCoinImg {
    transform: rotate(45deg);
  }
}
</style>