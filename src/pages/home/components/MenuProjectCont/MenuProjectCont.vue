<template>

  <div class="wrap"  v-show="showArticle">

    <div class="MenuProjectContWrap wow pulse" v-show="showArticle">
      <div class="menuProjectContTop">
        <div class="menuCoin"></div>
        <div class="menuText">{{articleData? articleData.article?.post_title : ''}}</div>
        <div class="rightCoin" @click="offArticle()">
          <img :src="menuOffOther" alt="" class="rightCoinImg">
        </div>
      </div>
      <transition
          name="custom-classes-transition"
          enter-active-class="animated animate__zoomInDown"
          leave-active-class="animated animate__zoomOutUp"
      >
        <div class="menuProjectMe">

          <div class="articlWrap" @mousemove="enterArticle" @mouseout="outArticle">
            <p class="title">{{articleData? articleData.article?.post_title: ''}}</p>
            <p class="title1">{{articleData? articleData.article?.post_title_1: ''}}</p>
            <p class="area">{{articleData? articleData.article?.post_area: ''}}</p>
            <p class='vHtml' v-html="articleData? articleData.article?.post_content: ''"></p>

            <div class="rightCover"></div>
          </div>

          <div class="swiperWrap">

            <div class="swiper">
              <div class="swiper-wrapper">

                <div class="swiper-slide"  v-for="i in photos">
                  <img :src="info.site_admin_domain + '/upload/' + i.url" alt="" v-if="i.url">
                </div>
              </div>

              <div class="prev">
                <img :src="left" alt="" class="left">
              </div>
              <div class="next">
                <img :src="right" alt="" class="right">
              </div>
<!--              <div class="swiper-button-prev"></div>-->
<!--              <div class="swiper-button-next"></div>-->

            </div>

          </div>


        </div>
      </transition>

    </div>


  </div>


</template>
<script>
import {drag} from "../../../../assets/js/func";
import {api} from '@/service/api/api'
// import "swiper/dist/css/swiper.min.css";  // 所有 Swiper 样式，包括所有模块样式（如导航、分页等）
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from "swiper"; // 导入您需要的模块

export default {
  name: 'MenuProjectCont',

  props: {
    projectId: Number || String,
    cId: Number || String,
  },

  data() {
    return {
      menuOff: new URL('../../../../assets/image/menu-off.svg', import.meta.url).href,
      menuOffOther: new URL('../../../../assets/image/menu-off-other.png', import.meta.url).href,
      menuCont: new URL('../../../../assets/image/menuCont/menuCont.png', import.meta.url).href,
      project: new URL('../../../../assets/image/project/project.png', import.meta.url).href,

      left: new URL('../../../../assets/image/project/left.png', import.meta.url).href,
      right: new URL('../../../../assets/image/project/right.png', import.meta.url).href,

      articleData: null,
      photos: [],
      icons: [],
      info: null,
      showArticle: false

    }
  },

  mounted() {
    drag('.menuProjectContTop', '.MenuProjectContWrap')
    // this.getArticle()
  },

  methods: {
    wow() {
      new WOW({
        live: false
      }).init();
    },

    initSwiper() {
      new Swiper(".swiper", {
        speed: 400,
        spaceBetween: 100,
        autoplay: false,
        loop: true,
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,//修改swiper的父元素时，自动初始化swiper
        modules: [Navigation, Pagination, Scrollbar, Autoplay],
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
          // nextEl: '.swiper-button-next',
          // prevEl: '.swiper-button-prev',
        },
      });
    },

    async getArticle(id, cId) {
      var me = this
      this.showArticle = true
      this.wow()
      let res = await api['article']({
        cid: cId,
        id: id
      })
      this.articleData = res.data.data
      this.photos =  res.data.data.article?.more?.photos
      this.icons = res.data.data.article?.more?.icons
      this.info = window.info
      // console.log( this.articleData,  this.photos, this.info )
      me.$nextTick(() => {
        me.initSwiper()
      })
    },

    offArticle() {
      this.showArticle = false
      this.articleData = null
      this.photos = []
      this.icons = []
    },

    enterArticle(e) {
      document.getElementsByClassName('articlWrap')[0].style.overflow = 'auto'
    },

    outArticle(e) {
      document.getElementsByClassName('articlWrap')[0].style.overflow = 'hidden'
    }
  }
}
</script>
<style scoped lang="less">
.wrap {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
}
.MenuProjectContWrap {
  width: 955px;
  height: 470px;
  position: absolute;
  top: 305px;
  left: 485px;
  //right: 0;
  //bottom: 0;
  //margin: auto;
  background: #666666;
  border-radius: 5px;
  border: 1px solid #666666;
  .menuProjectContTop {
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
      //background: #666666;
      .rightCoinImg {
        width: 20px;
        height: 20px;
        color: #fff;
      }

    }
  }
  .menuProjectMe {
    width: 100%;
    //height: 440px;
    position: relative;
    .project {
      width: 375px;
      height: 250px;
      border-radius: 0px 0px 5px 5px;
      opacity: 1;
      margin-top: 45px;
      margin-left: 73px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .articlWrap {
      width: 359px;
      height: 440px;
      float: left;
      overflow: hidden;
      padding: 25px;
      box-sizing: border-box;
      /deep/ img {
        height: auto !important;
        max-width:100% !important;
      }
      //.rightC {
      //  width: 10px;
      //  height: 100%;
      //  position: absolute;
      //  z-index: 12;
      //  background: #1d39c4;
      //  right: 0;
      //  top: 0;
      //}
      .title {
        font-size: 22px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
      }
      .title1 {
        font-size: 12px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
      }
      .area {
        font-size: 12px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
      }
      .vHtml {
        width: 280px;
      }
      .rightCover {
        width: 30px;
        height: 440px;
        background: #666666;
        position: absolute;
        top: 0;
        left: 330px;
        z-index: 1999;
      }
    }
    .swiperWrap {
      width: 589px;
      height: 440px;
      float: right;
      position: relative;
      overflow: hidden;
      .swiper {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
        }
        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .prev {
        width: 44px;
        height: 44px;
        position: absolute;
        top: 200px;
        left: 30px;
        cursor: pointer;
        z-index: 98;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .next {
        width: 44px;
        height: 44px;
        position: absolute;
        top: 200px;
        right: 30px;
        cursor: pointer;
        z-index: 98;
        img {
          width: 100%;
          height: 100%;
        }
      }

    }
  }
  &:hover {
    //background: #ED1C24;
  }
}


</style>