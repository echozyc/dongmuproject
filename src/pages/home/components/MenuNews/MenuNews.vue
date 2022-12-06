<template>
  <div class="MenuNewsWrap" :class="{
    'MenuNewsWrap2':detailShow,
     'MenuNewsWrapColor': !detailShow,
     'MenuNewsWrapShadow': detailShow
  }">
    <div class="menuNewsTop">
      <div class="menuCoin"></div>
      <div class="menuText">NEWS</div>
      <div class="rightCoin" @click="clickDetail()">
        <img :src="menuOffOther" alt="" class="rightCoinImg">
      </div>
    </div>
    <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
    >
      <div class="menuNewsMe" v-show="!detailShow" @click="clickDetailShow()">
        <!--      <img :src="news" alt="" class="news">-->
      </div>
    </transition>

    <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
    >
      <div class="menuNewsMeDetail"  v-show="detailShow">
        <div class="list" v-for="i in listData">
          <p class="itemTitle"  @click="showI(i)" :class="{'itemTitleRed': i.contShow}"> {{i.post_title}}</p>


<!--          <transition-->
<!--              name="custom-classes-transition"-->
<!--              enter-active-class="animated animate__flash"-->
<!--              leave-active-class="animated animate__flash"-->
<!--          >-->
          <div class="itemCont" v-show="i.contShow">
            <p class="title">{{i.post_title}}</p>
            <p v-html="i.post_content"></p>
            <div class="shangWrap" @click="offItem(i)">
              <img :src="shang" alt="">
            </div>

          </div>
<!--          </transition>-->

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
      // news: new URL('../../../../assets/image/news/hs.png', import.meta.url).href,
      shang: new URL('../../../../assets/image/shang.png', import.meta.url).href,


      detailShow: false,
      listData: [],

    }
  },

  mounted() {
    drag('.menuNewsTop', '.MenuNewsWrap')
    this.getData()
  },

  methods: {

    showI(i) {
      this.listData.map(n => {
        if(n != i) n.contShow = false
      })
      i.contShow = !i.contShow
    },
    offItem(i) {
      i.contShow = false
    },

    clickDetailShow() {
      this.detailShow = true
      this.listData.map(n => {
        n.contShow = false
      })
      drag('.menuNewsTop', '.MenuNewsWrap', false)
    },
    clickDetail() {
      this.detailShow = false
      drag('.menuNewsTop', '.MenuNewsWrap')
    },

    async getData() {
      let res = await api['article_list']({
        id: 9,
      })
      this.listData = res.data.data.article_list.articles
      this.listData.map(i => {
        i.itemShow = false
      })
      console.log(this.listData)
    },

    detailHide() {
      this.detailShow = false
    }
  }
}
</script>
<style scoped lang="less">
@import "MenuNews.less";
.MenuNewsWrap {
  width: 320px;
  //height: 190px;
  position: absolute;
  top: 288px;
  left: 1538px;
  //right: 0;
  //bottom: 0;
  //margin: auto;
  background: #1A1A1A;
  border-radius: 5px;
  border: 1px solid #1A1A1A;
  padding-bottom: 30px;
  //transition: all 0.5s;
  .menuNewsTop {
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
      background: #000;
      .rightCoinImg {
        transition: all .5s;
        width: 20px;
        height: 20px;
        color: #fff;
      }

    }
  }
  .menuNewsMe {
    width: 230px;
    height: 90px;
    margin-top: 36px;
    margin-left: 30px;
    background: url('../../../../assets/image/news/hs.png');
    background-size: 100% 100%;
    cursor: pointer;
  }
  .menuNewsMeDetail {
    padding: 30px 30px 0;
    box-sizing: border-box;
    transition: all 0.5s;
    .list {
      .itemTitle {
        color: #fff;
        font-size: 18px;
        font-weight: 800;
        white-space: nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        cursor: pointer;
        &:hover {
          color: red;
        }
      }
      .itemTitleRed {
        color: red;
      }
      .itemCont {
        color: #fff;
        /deep/ img {
          max-width: 100% !important;
          height: auto !important;
        }
        .shangWrap {
          width: 100%;
          height: 30px;
          //background: #1d39c4;
          position: relative;
          margin-bottom: 20px;
          img {
            width: 30px !important;
            height: 30px !important;
            position: absolute;
            top: 0;
            right: 20px;
            cursor: pointer;
          }
        }
      }
    }

  }
  &:hover {
    .menuNewsTop {
      //background: #000;
    }
    .menuNewsMe {
      background: url('../../../../assets/image/news/NEWS.gif');
      background-size: 100% 100%;
    }
  }
}


.MenuNewsWrap2 {
  width: 500px;
  //left: 50%;
  //transform: translateX(-50%);
}
.MenuNewsWrapColor {

}
.MenuNewsWrapShadow {
  //box-shadow: 30px 30px 20px #3D3D3D;
  .rightCoinImg {
    transform: rotate(45deg);
  }
}
//.fade-box-leave-to {
//  animation: bounceOutRight 0.8s;
//}
</style>