<template>
<div class="cccWrap">
  <div class="menuTop">
    <div class="icon"></div>
    <p class="ti">{{articleData? articleData.article?.post_title : ''}}</p>
    <div class="rightIcon" @click="clickOff()">
      <img :src="off" alt="">
    </div>
  </div>

  <div class="cont">

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


    <div class="articlWrap">
      <p class="title">{{articleData? articleData.article?.post_title: ''}}</p>
      <p class="title1">{{articleData? articleData.article?.post_title_1: ''}}</p>
      <p class="area">{{articleData? articleData.article?.post_area: ''}}</p>
      <p class='vHtml' v-html="articleData? articleData.article?.post_content: ''"></p>

      <div class="rightCover"></div>
    </div>


  </div>

</div>
</template>
<script>
import {api} from '@/service/api/api'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from "swiper"; // 导入您需要的模块
export default {
  name: 'index',

  data() {
    return {
      off: new URL('../../../../assets/image/menu-off-other.png', import.meta.url).href,
      left: new URL('../../../../assets/image/project/left.png', import.meta.url).href,
      right: new URL('../../../../assets/image/project/right.png', import.meta.url).href,
      articleData: null,
      photos: [],
      icons: [],
      info: null,
    }
  },

  methods: {
    clickOff() {
      this.$emit('clickOff')

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
      let res = await api['article']({
        cid: cId,
        id: id
      })
      this.articleData = res.data.data
      this.photos =  res.data.data.article?.more?.photos
      this.icons = res.data.data.article?.more?.icons
      this.info = window.info
      console.log( this.articleData,  this.photos, this.info )
      me.$nextTick(() => {
        me.initSwiper()
      })
    },

  },

  mounted() {

  },
}
</script>
<style scoped lang="less">
.cccWrap {
  width: 650rem;
  height: 90%;
  background: #666666;
  border-radius: 10rem;
  position: fixed;
  top: 100rem;
  left: 45rem;
  z-index: 100;
  overflow: auto;
  margin-bottom: 20rem;
  .menuTop {
    width: 100%;
    height: 64rem;
    background: #666666;
    border-bottom: 1rem solid #ffffff;
    position: sticky;
    top: 0;
    z-index: 109;
    .icon {
      width: 16rem;
      height: 16rem;
      background: #ED1C24;
      opacity: 1;
      border: 1rem solid #ffffff;
      border-radius: 50%;
      float: left;
      margin-top: 24rem;
      margin-left: 30rem;
    }
    .ti {
      font-size: 20rem;
      font-weight: 500;
      color: #ffffff;
      overflow: hidden;
      position: absolute;
      margin-top: 13rem;
      margin-left: 65rem;
    }
    .rightIcon {
      width: 64rem;
      height: 64rem;
      border-left: 1rem solid #ffffff;
      border-bottom: 1rem solid #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #666666;
      position: absolute;
      right: 0;
      img {
        width: 40rem;
        height: 40rem;
      }
    }
  }
  .cont {
    .articlWrap {
      padding: 60rem;
      box-sizing: border-box;
      .title {
        font-size: 30rem;
        font-weight: 600;
      }
      .title1 {
        font-size: 20rem;
      }
      .area {
        font-size: 12px;
      }

    }
    .swiperWrap {
      width: 650rem;
      height: 364rem;
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
        width: 44rem;
        height: 44rem;
        position: absolute;
        top: 165rem;
        left: 30rem;
        cursor: pointer;
        z-index: 98;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .next {
        width: 44rem;
        height: 44rem;
        position: absolute;
        top: 165rem;
        right: 30rem;
        cursor: pointer;
        z-index: 98;
        img {
          width: 100%;
          height: 100%;
        }
      }

    }




  }


}
</style>