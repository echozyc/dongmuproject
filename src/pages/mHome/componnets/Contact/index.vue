<template>
  <div class="menuContactWrap">
    <div class="menuTop">
      <div class="icon"></div>
      <span class="titleText">CONTACT</span>
      <div class="rightIcon">
        <img :src="off" alt="">
      </div>
    </div>
    <div class="menuM">
      <div class="content" @click="clickOn()">
        <img :src="contact" alt="" class="">
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
      contact: new URL('../../../../assets/image/contact/contact.png', import.meta.url).href,

    }
  },

  methods: {
    clickOn() {
      this.$emit('clickOn')
    }
  },

  mounted() {

  },
}
</script>
<style scoped lang="less">
.menuContactWrap {
  width: 260rem;
  height: 296rem;
  //border-radius: 10rem;
  overflow: hidden;
  background: #BFBFBF;
  position: absolute;
  top: 715rem;
  left: 30rem;
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
      border: 1rem solid #ffffff;
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
      color: #ffffff;
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
    height: 250rem;
    //border-bottom: 1rem solid #1A1A1A;
    position: relative;
    .content {
      width: 140rem;
      height: 180rem;
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
}
</style>