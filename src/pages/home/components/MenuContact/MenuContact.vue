<template>
  <div class="MenuContectWrap"  :class="{
    'MenuContectWrapColor': !detailShow,
    'MenuContectWrapShadow': detailShow
  }">
    <div class="menuContectTop">
      <div class="menuCoin"></div>
      <div class="menuText">{{pageData.post_title}}</div>
      <div class="rightCoin" @click="clickDetail()">
        <img :src="menuOffOther" alt="" class="rightCoinImg">
      </div>
    </div>

    <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
    >
      <div class="menuContectMe" v-show="!detailShow" @click="clickDetailShow()">
        <img :src="contact" alt="" class="contact">
      </div>
    </transition>

    <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
    >
      <div class="menuContectMeDetail" v-show="detailShow">
        <p class="p1" v-html="pageData.post_content"></p>

        <!--      <p class="p2">-->
        <!--        Tel:0755-26929096-->
        <!--        Angela Yao-->
        <!--        Email:sw@tomodesign.info-->
        <!--      </p>-->

        <!--      <div class="qrCode"></div>-->
        <!--      <div class="avatar">-->
        <!--        <img :src="contact" alt="" >-->
        <!--      </div>-->
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
      contact: new URL('../../../../assets/image/contact/contact.png', import.meta.url).href,
      detailShow: false,
      pageData: {},
    }
  },

  mounted() {
    drag('.menuContectTop', '.MenuContectWrap')
    this.getData()
  },

  methods: {
    clickDetailShow() {
      this.detailShow = true
      if(!this.detailShow) {
        setTimeout(() => {
          drag('.menuContectTop', '.MenuContectWrap')
        },1500)
      } else {
        drag('.menuContectTop', '.MenuContectWrap', false)
      }
    },
    clickDetail() {
      this.detailShow = false
      if(!this.detailShow) {
        setTimeout(() => {
          drag('.menuContectTop', '.MenuContectWrap')
        },1500)
      } else {
        drag('.menuContectTop', '.MenuContectWrap', false)
      }

    },

    async getData() {
      let res = await api['page']({
        id: 2,
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
.MenuContectWrap {
  width: 280px;
  position: absolute;
  top: 608px;
  left: 364px;
  //right: 0;
  //bottom: 0;
  //margin: auto;
  background: #ED1C24;
  border-radius: 5px;
  opacity: 1;
  border: 1px solid #1A1A1A;
  //transition: all 0.5s;
  .menuContectTop {
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #1A1A1A;
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
      border-left: 1px solid #1A1A1A;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      //background: #BFBFBF;
      .rightCoinImg {
        width: 20px;
        height: 20px;
        color: #fff;
      }

    }
  }
  .menuContectMe {
    width: 100%;
    height: 260px;
    position: relative;
    top: 0;
    cursor: pointer;
    .contact {
      width: 140px;
      height: 180px;
      border-radius: 0px 0px 5px 5px;
      opacity: 1;
      margin-top: 50px;
      margin-left: 90px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .menuContectMeDetail {
    width: 100%;
    //height: 350px;
    padding-top: 50px;
    position: relative;
    p {
      font-size: 12px;
      font-family: PingFang SC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(255,255,255,0.8);
      line-height: 18px;
      -webkit-background-clip: text;
      text-align: right;
      margin-right: 30px;
      margin-bottom: 30px;
      /deep/ img {
        max-width: 80% !important;
      }
    }
    .qrCode {
      width: 90px;
      height: 90px;
      background: #000;
      position: absolute;
      left: 30px;
      bottom: 30px;
    }
    .avatar {
      width: 55px;
      height: 70px;
      position: absolute;
      right: 30px;
      bottom: 30px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  @keyframes axisX {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* 2. 过渡类名 */
  /* 开始 */
  .fade-enter-active {
    animation: axisX 1s;
  }
  /* 结束 */
  .fade-leave-active {
    animation: axisX 1s reverse;
  }

  &:hover {
    background: #ED1C24;
  }
}

.MenuContectWrapColor {

}
.MenuContectWrapShadow {
  width: 400px;
  //box-shadow: 30px 30px 20px #3D3D3D;
  .rightCoinImg {
    transform: rotate(45deg);
  }
}
</style>