<template>
  <div class="menuContWrap">
    <div class="menuTop">
      <div class="icon"></div>
      <span class="titleText">MENU</span>
      <div class="rightIcon" @click="ckOff">
        <img :src="off" alt="">
      </div>
    </div>

    <div class="menuM">
      <div class="imgWrap"  v-show="showMenu">
        <img :src="menuCont" alt="" class="menuContImg">
      </div>
      <div class="menuText">
        <p>ABOUT</p>
        <p>PROJECT</p>
        <p>CONTACT</p>
        <p>NEWS</p>
      </div>

      <div class="menuOther">
        <div class="menuC">
          <img :src="menuAll" alt="" class="menuContImg">
        </div>
      </div>



      </div>

    <div class="menuB">
      <div class="menuBContent">
        <img :src="bottom" alt="" class="logo">
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'index',

  data() {
    return {
      off: new URL('../../../../assets/image/menu-off-other.svg', import.meta.url).href,
      bottom: new URL('../../../../assets/MImage/bottom.png', import.meta.url).href,

      menuCont: new URL('../../../../assets/image/menuCont/menuCont.png', import.meta.url).href,
      menuAll: new URL('../../../../assets/image/menuCont/mAll.png', import.meta.url).href,

      showMenu: true,

    }
  },

  methods: {
    ckOff() {
      this.$emit('ckOff')
    }

  },

  mounted() {

  }
}
</script>
<style scoped lang="less">
.menuContWrap {
  width: 240rem;
  //height: 494rem;
  background: #F1F1F1;
  border: 1rem solid #1A1A1A;
  position: absolute;
  top: 94rem;
  left: 30rem;
  border-radius: 10rem;
  overflow: hidden;
  .menuTop {
    width: 100%;
    height: 36rem;
    border-bottom: 1rem solid #1A1A1A;
    .icon {
      width: 10rem;
      height: 10rem;
      background: #ED1C24;
      opacity: 1;
      border: 1rem solid #1A1A1A;
      border-radius: 50%;
      float: left;
      margin-top: 13rem;
      margin-left: 15rem;
    }
    .titleText {
      font-size: 20rem;
      float: left;
      font-weight: 500;
      margin-left: 9rem;
    }
    .rightIcon {
      width: 34rem;
      height: 34rem;
      border-left: 1rem solid #1A1A1A;
      float: right;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 24rem;
        height: 24rem;
      }
    }
  }
  .menuM {
    width: 100%;
    //height: 434rem;
    border-bottom: 1rem solid #1A1A1A;
    overflow: hidden;
    .imgWrap {
      width: 52rem;
      height: 100rem;
      background: #F1F1F1;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
      margin-bottom: 30rem;
      margin-top: 50rem;
      margin-left: 50rem;
      .menuContImg {
        width: 100%;
        height: 100%;
      }
    }
    .menuText {
      font-size: 12rem;
      font-family: PingFang SC-Semibold, PingFang SC;
      font-weight: 400;
      color: #1A1A1A;
      margin-left: 50rem;
      p {
        cursor: pointer;
        font-size: 14rem;
        font-weight: 600;
        color: #1A1A1A;
        margin-bottom: 10rem;
      }
    }
    .menuOther {
      width: 150px;
      height: 20px;
      margin-left: 50rem;
      margin-top: 30rem;
      margin-bottom: 30rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .menuC {
        width: 140rem;
        img {
          width: 100%;
        }
      }
    }

  }
  .menuB {
    width: 100%;
    height: 24rem;
    background: #1A1A1A;
    position: relative;
    .menuBContent {
      width: 175rem;
      height: 8rem;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }


}

</style>