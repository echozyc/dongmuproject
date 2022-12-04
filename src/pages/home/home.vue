<template>
   <div class="homeWrap">
       <Menu @offMenu="offMenu" class="wow wobble" v-show="!isOffMenu && !pjDetailShow"></Menu>
       <MenuCont @onMenu="onMenu"
                 @ck="ck"
                 @ckProjectDetail="ckProjectDetail"
                 ref="menuCont"
                 class="wow fadeIn" v-show="isOffMenu || pjDetailShow"></MenuCont>


       <div class="ex bg" v-show="isOffMenu">
         <MenuAbout class="wow fadeIn" ref="menuAbout"></MenuAbout>
         <MenuProject class="wow fadeIn" ref="menuProject" @toDetail="toDetailPD"></MenuProject>
         <MenuContact class="wow fadeIn" ref="menuContact"></MenuContact>
         <MenuNews  class="wow fadeIn" ref="menuNews"></MenuNews>
       </div>



     <transition
         name="custom-classes-transition"
         enter-active-class="animated animate__fadeIn"
         leave-active-class="animated animate__fadeOut"
     >
       <div class="projectDetailWrap" v-show="pjDetailShow">
         <MenuPrijectDetail ref="menuPrijectDetail" :id="projectId"></MenuPrijectDetail>
       </div>
     </transition>

   </div>
</template>
<script>
import Menu from './components/Menu/Menu.vue'
import MenuCont from './components/MenuCont/MenuCont.vue'
import MenuAbout from './components/MenuAbout/MenuAbout.vue'
import MenuProject from './components/MenuProject/MenuProject.vue'
import MenuPrijectDetail from './components/MenuPrijectDetail/MenuPrijectDetail.vue'

import MenuContact from './components/MenuContact/MenuContact.vue'
import MenuNews from './components/MenuNews/MenuNews.vue'

import {api} from '@/service/api/api'
import '@/assets/js/wow.js'
export default {
  name: 'home.vue',
  components: {
    Menu,
    MenuCont,
    MenuAbout,
    MenuProject,
    MenuContact,
    MenuNews,
    MenuPrijectDetail
  },
  data() {
    return {
      isOffMenu: false,
      h: 0,
      pjDetailShow: false,
      projectId: 8,  // 二级项目列表 分类id
    }
  },
  mounted() {
    this.getComDetail()
    window.zIndex = 100
    this.$nextTick(() => {
      this.wow()
    })
    document.addEventListener('click', function (e) {
      let h = document.documentElement.scrollHeight
      document.getElementsByClassName('bg')[0].style.height = h + 'px'
      document.getElementsByClassName('homeWrap')[0].style.height = h + 'px'
    })
  },
  methods: {
    wow() {
      new WOW({
        live: false
      }).init();
    },
    offMenu() {
      this.isOffMenu = true
      this.pjDetailShow = false
      this.wow()
    },
    onMenu() {
      this.isOffMenu = false
      this.pjDetailShow = false
      this.wow()

      // 关闭所有的 menu
      this.$refs.menuAbout.detailHide()
      this.$refs.menuProject.detailHide()
      this.$refs.menuContact.detailHide()
      this.$refs.menuNews.detailHide()
    },
    ck(id) {
      this.pjDetailShow = false
      this.isOffMenu = true
      console.log(id)
      switch (id) {
        case '1':
          if(!this.$refs.menuAbout.detailShow) {
            this.$refs.menuAbout.clickDetailShow();
          } else {
            this.$refs.menuAbout.clickDetail();
          }
          break
        case '2':
          if(!this.$refs.menuProject.detailShow) {
            this.$refs.menuProject.clickDetailShow();
          } else {
            this.$refs.menuProject.clickDetail();
          }
          break
        case '3':
          if(!this.$refs.menuContact.detailShow) {
            this.$refs.menuContact.clickDetailShow();
          } else {
            this.$refs.menuContact.clickDetail();
          }
          break
        case '4':
          if(!this.$refs.menuNews.detailShow) {
            this.$refs.menuNews.clickDetailShow();
          } else {
            this.$refs.menuNews.clickDetail();
          }
          break

      }
    },
    ckProjectDetail(id) {
      this.isOffMenu = false
      this.pjDetailShow = true
      this.wow()
      this.projectId = id
      console.log(id)
      this.$refs.menuPrijectDetail.getData(id)
    },

    async getComDetail() {
      let res = await api['index']()
      window.info = res.data.data
      console.log(window.info)
    },

    toDetailPD(params) {
      // 点击 id = 8 展示前全部列表数据
      this.ckProjectDetail(params.id)
      // 点击 对应详情
      setTimeout(() => {
        this.$refs.menuPrijectDetail.toDetail(params.id, params.cId)
        // menu 列表展开
        this.$refs.menuCont.showList()
      },1000)

    },
  }
}
</script>

<script setup>
import {onMounted} from "vue";
onMounted(() => {});
</script>
<style scoped lang="less">
@import "home.less";
</style>