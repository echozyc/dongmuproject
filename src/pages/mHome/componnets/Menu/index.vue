<template>
  <div class="menuWrap">
    <div class="menuTop">
      <div class="icon"></div>
      <span class="titleText">MENU</span>
      <div class="rightIcon">
        <img :src="off" alt="">
      </div>
    </div>
    <div class="menuM">
      <div class="content" @click="ckMenu">
        <img :src="menu" alt="" class="logo">
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
      menu: new URL('../../../../assets/MImage/menu.gif', import.meta.url).href,
      bottom: new URL('../../../../assets/MImage/bottom.png', import.meta.url).href,
      off: new URL('../../../../assets/image/menu-off-other.svg', import.meta.url).href,

    }
  },

  mounted() {

  },

  methods: {
    ckMenu() {
      this.$emit('ckMenu')
    }

  }
}
</script>
<style scoped lang="less">
.menuWrap {
  width: 240rem;
  height: 300rem;
  background: #F1F1F1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 1rem solid #1A1A1A;
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
    height: 240rem;
    border-bottom: 1rem solid #1A1A1A;
    .content {
      width: 200rem;
      height: 200rem;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      img {
        width: 100%;
        height: 100%;
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