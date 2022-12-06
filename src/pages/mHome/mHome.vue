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
      <MenuCont @ckOff="ckOff"
                @ckImg="ckImg"
                @CKABOUT="this.contentAboutShow = true; this.secondShow = false"
                @CKCONTACT="this.contentContactShow = true ; this.secondShow = false"
                @CKNEWS="this.contentNewsShow = true; this.secondShow = false"
                @CKPROJECT="CKPROJECT"
                @ckProjectDetail="ckProjectDetail"
                :secondShow="secondShow"
      />

      <div class="cShow" v-show="!secondShow">
        <AboutMenu @clickOn="this.contentAboutShow = true"/>
        <News @clickOn="this.contentNewsShow = true"/>
        <Contact @clickOn="this.contentContactShow = true"></Contact>
        <Project @clickOn="CKPROJECT"></Project>

      </div>


      <ContentAbout
          v-show="contentAboutShow"
          @clickOff="this.contentAboutShow = false"/>

      <ContentNews
          v-show="contentNewsShow"
          @clickOff="this.contentNewsShow = false"/>

      <ContentContact
          v-show="contentContactShow"
          @clickOff="this.contentContactShow = false"/>

      <ContentProjectLists
          v-show="secondShow"
          @ckDetail="ckDetail"
          ref="projectLists"
      />

      <ContentProjectDetail
          v-show="ContentProjectDetailShow"
          @clickOff="ContentProjectDetailShow = false"
          ref="ContentProjectDetail"
      />


    </div>



  </div>
</template>
<script>
import {api} from '@/service/api/api'
import Menu from './componnets/Menu/index.vue'
import MenuCont from './componnets/MenuCont/index.vue'
import AboutMenu from './componnets/AboutMenu/index.vue'
import News from './componnets/News/index.vue'
import Contact from './componnets/Contact/index.vue'
import Project from './componnets/Project/index.vue'

import ContentAbout from './componnets/content_about/index.vue'
import ContentNews from './componnets/content_news/index.vue'
import ContentContact from './componnets/content_contact/index.vue'

import ContentProjectLists from './componnets/content_projectLists/index.vue'
import ContentProjectDetail from './componnets/content_projectDetail/index.vue'


export default {
  name: 'mHome.vue',

  components: {
    Menu,
    MenuCont,
    AboutMenu,
    News,
    Contact,
    Project,
    ContentAbout,
    ContentNews,
    ContentContact,
    ContentProjectLists,
    ContentProjectDetail
  },

  data() {
    return {
      logo: new URL('../../assets/MImage/logo.png', import.meta.url).href,
      bg: new URL('../../assets/MImage/bg.png', import.meta.url).href,
      menuShow: true,
      contentAboutShow: false,
      contentNewsShow: false,
      contentContactShow: false,

      // cShow: true,
      secondShow: false,
      ContentProjectDetailShow: false,
    }
  },

  mounted() {
    document.documentElement.style.fontSize =  document.documentElement.clientWidth / 750 + 'px'
    this.getComDetail()
  },

  methods: {
    ckMenu() {
      this.menuShow = false
    },
    ckOff() {
      this.menuShow = true
    },
    ckProjectDetail(id) {
      console.log(id)
      this.$refs.projectLists.getData(id)

    },
    CKPROJECT() {
      this.secondShow = !this.secondShow
      // this.cShow = !this.cShow
      if(this.secondShow) {
        this.$refs.projectLists.getData('8')
      }
    },
    ckImg() {
      this.secondShow = false
    },
    ckDetail(val) {
      this.$refs.ContentProjectDetail.getArticle(val.id, val.cId)
      this.ContentProjectDetailShow = true
      console.log(val)
    },

    async getComDetail() {
      let res = await api['index']()
      window.info = res.data.data
      console.log(window.info)
    },
  },
}
</script>
<style scoped lang="less">
.mHomeWrap {
  width: 100%;
  //height: 100%;
  min-height: 100%;
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
    position: absolute;
    background: url("../../assets/MImage/bg.png");
    background-size: 100%;
    padding-bottom: 20rem;
    box-sizing: border-box;
    overflow: auto;

  }
}

</style>