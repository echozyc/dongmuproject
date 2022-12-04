<template>
  <div class="MenuPrijectDetailWrap">
    <div class="listWrap">
      <div class="contWrap">

        <div class="cont">
<!--          ID 不等于8情况-->
          <p v-for=" i in listData" class="wow pulse" v-if="catId != 8">
            <span @mouseenter="mEnter(i.id)" @mouseout="mOut(i.id)" @click="toDetail(i.id, i.category_id)"> {{ i.post_title }}</span>
          </p>

<!--          ID 等于8情况-->
          <div v-for=" k in listObj" class="wow pulse fir" v-if="catId == 8">
            <p v-for=" i in k" class="wow pulse sec" >
              <span @mouseenter="mEnter(i.id)" @mouseout="mOut(i.id)" @click="toDetail(i.id, i.category_id)"> {{ i.post_title }}</span>
            </p>
          </div>

        </div>

      </div>

      <div class="coinBg">

<!--        <transition-->
<!--            name="custom-classes-transition"-->
<!--            enter-active-class="animated animate__fadeIn"-->
<!--            leave-active-class="animated animate__fadeOut"-->
<!--        >-->

<!--          <div class="hoverWrap" v-show="hoverId">-->
<!--            <div class="iconItemWrap" v-for=" i in listData">-->
<!--              <img :src="info.site_admin_domain + '/upload/' + i.more.icons[1].url" alt=""-->
<!--                   v-if="i.more.icons && hoverId == i.id">-->
<!--            </div>-->
<!--          </div>-->

<!--        </transition>-->

        <div class="hoverWrap" v-show="hoverId">
          <div class="iconItemWrap" v-for=" i in listData">
            <img :src="info.site_admin_domain + '/upload/' + i.more.icons[1].url" alt=""
                 v-if="i.more.icons && hoverId == i.id">
          </div>
        </div>


        <transition
            name="custom-classes-transition"
            enter-active-class="animated animate__fadeIn"
            leave-active-class="animated animate__fadeOut"
        >

          <div class="iconListWrap" v-show="!hoverId">
            <div class="iconItemWrap" v-for=" i in listData">
              <img :src="info.site_admin_domain + '/upload/' + i.more.icons[0].url" alt="" v-if="i.more.icons">
            </div>
          </div>

        </transition>

<!--        <div class="iconListWrap" v-show="!hoverId">-->
<!--          <div class="iconItemWrap" v-for=" i in listData">-->
<!--            <img :src="info.site_admin_domain + '/upload/' + i.more.icons[0].url" alt="" v-if="i.more.icons">-->
<!--          </div>-->
<!--        </div>-->
      </div>


      <MenuProjectCont :projectId="projectId" :cId="cId" ref="menuProjectCont"></MenuProjectCont>


    </div>


  </div>
</template>
<script>
import {drag} from "../../../../assets/js/func";
import {api} from '@/service/api/api'
import MenuProjectCont from "../MenuProjectCont/MenuProjectCont.vue";


export default {
  name: 'MenuPrijectDetail',

  props: {
    'id': Number || String
  },

  components: {
    MenuProjectCont
  },

  data() {
    return {
      demo: new URL('../../../../assets/image/demo.png', import.meta.url).href,
      listData: null,
      projectId: null,
      cId: null,
      info: null,

      hoverId: null,

      listCat: null,
      listObj: null,

      catId: null,
      time: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.sc()
    })
  },

  watch: {
    // 'id': function () {
    //   this.getData()
    // }

  },

  methods: {
    wow() {
      new WOW({
        live: false
      }).init();
    },

    sc() {
      let $listWrap =  document.getElementsByClassName('listWrap')[0]
      let $contWrap =  document.getElementsByClassName('contWrap')[0]
      let $iconListWrap =  document.querySelector('.iconListWrap')

      $listWrap.addEventListener('scroll',function(){
        let $listWrapH = $listWrap.offsetHeight
        let $contWrapH= $contWrap.offsetHeight
        let $iconListWrapH = $iconListWrap.offsetHeight
        let multiple = ( $iconListWrapH -$listWrapH  ) / ( $contWrapH - $listWrapH )
        let sT =  $listWrap.scrollTop
        $iconListWrap.style.transform = `translateY(${-sT * multiple}px)`
      })
    },

    async getData(id) {
      this.listData = null
      this.catId = id
      if(id == 8) {
        // this.getAirticleCat()
        let res = await api['article_list']({
          id: id,
        })
        this.info = window.info
        this.listData = res.data.data?.article_list?.articles
        let listObj = {}
        this.listData.map(i => {
          if (listObj[i.category_id]) {
            listObj[i.category_id].push(i)
          } else {
            listObj[i.category_id] = []
            listObj[i.category_id].push(i)
          }
        })

        this.listObj = listObj
      } else {
        let res = await api['article_list']({
          id: id,
        })
        this.info = window.info
        this.listData = res.data.data?.article_list?.articles
      }


    },

    toDetail(id, cId) {
      if(!this.listData) {
        this.getData('8')
      }
      console.log(id)
      this.projectId = id
      this.cId = cId
      setTimeout(() => {
        this.$refs.menuProjectCont.getArticle(id, cId)
      })
    },

    mEnter(id) {
      console.log('eee')
      if(this.time) {
        clearTimeout(this.time)
      }
      this.hoverId = id
    },

    mOut() {
      console.log('ooo')
      this.time = setTimeout(() => {
        this.hoverId = null
      }, 1000)
    },

    //  获取文章分类
    async getAirticleCat() {
      let res = await api['articleCat']({
        id: 8,
      })
      this.listCat = res.data.data.category_list
      // this.listCat.unshift({id: 8, name: 'All'})
      console.log(this.listCat)

    },

  },
}
</script>
<style scoped lang="less">
@import "MenuPrijectDetail.less";
.MenuPrijectDetailWrap {
  height: 100%;
  //position: absolute;
  //top: 0;
  //left: 0;
  overflow-y: auto;
  border-radius: 5px;
  .listWrap {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    .contWrap {
      position: relative;
      z-index: 10;
      overflow: hidden;
      .cont {
        font-size: 40px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 20px;
        -webkit-background-clip: text;
        padding-top: 77px;
        box-sizing: border-box;
        padding-left: 465px;
        .fir {
          margin-bottom: 150px;
          width: 700px;
          //background: #535bf2;
          float: left;
          .sec {
            line-height: 30px;
            span {
              line-height: 45px;
            }

          }
        }

        p {
          cursor: pointer;
          margin-bottom: 50px;
          &:hover {
            color: red;
          }
        }
      }
    }
    .coinBg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      overflow: auto;
      .hoverWrap {
        width: 1400px;
        height: 100%;
        margin-left: 500px;
        box-sizing: border-box;
        //float: right;
        margin-right: 100px;
        display: flex;
        align-items: center;
        img {
          width: 600px;
          height: 600px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-300px, -300px);
        }
      }
      .iconListWrap {
        width: 1400px;
        //margin-left: 500px;
        box-sizing: border-box;
        //float: right;
        //margin-right: 100px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin: 0 auto;
        .iconItemWrap {
          width: 200px;
          height: 200px;
          //flex: 25%;
          margin-left: 100px;
          //margin-bottom: 100px;
          margin-top: 100px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }



}
</style>