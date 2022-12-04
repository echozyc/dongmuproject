<template>
  <div class="mHomeWrap">
    <div class="header">
      <div class="logoWrap">
        <img :src="logo" alt="" class="logo">
      </div>
      <div class="rText">
       <p> PIONEER CREATIVE</p>
      </div>
    </div>

    <Menu v-show="menuShow"
          @ckMenu="ckMenu"
    />


    <div class="cWrap" v-show="!menuShow">
      <MenuCont @ckOff="ckOff"></MenuCont>
      <AboutMenu></AboutMenu>
      <News></News>
      <Contact></Contact>
      <Project></Project>

      <ContentAbout></ContentAbout>

    </div>



  </div>
</template>
<script>
import Menu from './componnets/Menu/index.vue'
import MenuCont from './componnets/MenuCont/index.vue'
import AboutMenu from './componnets/AboutMenu/index.vue'
import News from './componnets/News/index.vue'
import Contact from './componnets/Contact/index.vue'
import Project from './componnets/Project/index.vue'

import ContentAbout from './componnets/content_about/index.vue'



export default {
  name: 'mHome.vue',

  components: {
    Menu,
    MenuCont,
    AboutMenu,
    News,
    Contact,
    Project,
    ContentAbout
  },

  data() {
    return {
      logo: new URL('../../assets/MImage/logo.png', import.meta.url).href,
      bg: new URL('../../assets/MImage/bg.png', import.meta.url).href,
      menuShow: true
    }
  },

  mounted() {
    document.documentElement.style.fontSize =  document.documentElement.clientWidth / 750 + 'px'
  },

  methods: {
    ckMenu() {
      this.menuShow = false
    },
    ckOff() {
      this.menuShow = true
    }

  },
}
</script>
<style scoped lang="less">
.mHomeWrap {
  width: 100%;
  height: 100%;
  background-color: #E6E5E3;
  background-size: 15rem 15rem, 15rem 15rem;
  background-image:
      linear-gradient(90deg, #C1C0BD 2rem, transparent 2rem),
      linear-gradient(0, #C1C0BD 2rem,transparent 2rem);
  .header {
    width: 100%;
    height: 50rem;
    background: #666666;
    border-radius: 0px 0px 0px 0px;
    overflow: hidden;
    .logoWrap {
      width: 83rem;
      height: 20rem;
      float: left;
      margin-top: 15rem;
      margin-left: 30rem;
      img {
        width: 83rem;
        height: 20rem;
        display: block;
      }
    }
    .rText {
      //width: 228rem;
      height: 20rem;
      //background: #1A1A1A;
      float: right;
      margin-top: 7rem;
      margin-right: 30rem;
      font-size: 18rem;
    }
  }
  .cWrap {
    height: calc(100% - 50rem);
    width: 100%;
    position: relative;
    background: url("../../assets/MImage/bg.png");
    background-size: 100%;

  }
}

</style>