<template>
  <div class="MenuProjectWrap" :class="{
    'MenuNewsWrap2':detailShow,
     'MenuProjectWrapColor': !detailShow,
     'MenuProjectWrapShadow': detailShow
  }">
    <div class="menuProjectTop">
      <div class="menuCoin"></div>
      <div class="menuText">OUR PROJECT</div>
      <div class="rightCoin" @click="clickDetail()">
        <img :src="menuOffOther" alt="" class="rightCoinImg">
      </div>
    </div>
    <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
    >
      <div class="menuProjectMe" v-show="!detailShow"
           @mouseenter="projectImg = false"
           @mouseleave="projectImg = true"
           @click="clickDetailShow()">
        <img :src="projectGif" alt="" class="projectGif" v-show="!projectImg">
        <img :src="project" alt="" class="project" v-show="projectImg">
      </div>
    </transition>

    <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
    >
    <div class="menuProjectMeDetail" v-show="detailShow">

      <img :src="project" alt="" class="detailProject">

      <div class="listDWrap">
<!--        <p v-for=" i in listData">-->
<!--          <span @click="toDetail(i.id, i.category_id)"> {{ i.post_title }}</span>-->
<!--        </p>-->

        <div v-for=" (k,f) in listObj" class="wow pulse fir">
          <p class="title">
            <img :src="blick" alt="" class="blick">
            {{ this.idFindName(f, this.listCat) }}
          </p>

          <p v-for=" i in k" class="wow pulse sec" >
            <span @click="toDetail(i.id, i.category_id)"> {{ i.post_title }}</span>
          </p>
        </div>
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
  // props: {
  //   'id': Number || String
  // },


  data() {
    return {
      menuOff: new URL('../../../../assets/image/menu-off.svg', import.meta.url).href,
      menuOffOther: new URL('../../../../assets/image/menu-off-other.png', import.meta.url).href,
      menuCont: new URL('../../../../assets/image/menuCont/menuCont.png', import.meta.url).href,
      project: new URL('../../../../assets/image/project/project.png', import.meta.url).href,
      projectGif: new URL('../../../../assets/image/project/project.gif', import.meta.url).href,
      blick: new URL('../../../../assets/image/blick2.png', import.meta.url).href,
      listData: null,
      detailShow: false,

      projectImg: true,
      listObj: null,
      listCat: null
    }
  },

  // watch: {
  //   'id': function () {
  //     this.getData()
  //   }
  //
  // },

  mounted() {
    drag('.menuProjectTop', '.MenuProjectWrap')
    this.getData()
    this.getAirticleCat()
  },

  methods: {
    clickDetailShow() {
      this.detailShow = true
      if(!this.detailShow) {
        setTimeout(() => {
          drag('.menuProjectTop', '.MenuProjectWrap')
        },1500)
      } else {
        drag('.menuProjectTop', '.MenuProjectWrap', false)
      }

    },
    clickDetail() {
      this.detailShow = false
      if(!this.detailShow) {
        setTimeout(() => {
          drag('.menuProjectTop', '.MenuProjectWrap')
        },1500)
      } else {
        drag('.menuProjectTop', '.MenuProjectWrap', false)
      }

    },
    // 获取列表数据
    async getData() {
      let res = await api['article_list']({
        id: 8,
      })
      this.listData = res.data.data.article_list.articles
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
      console.log(this.listObj)
    },

    // 获取分类数据
    async getAirticleCat() {
      let res = await api['articleCat']({
        id: 8,
      })
      this.listCat = res.data.data.category_list
      this.listCat.unshift({id: 8, name: 'All PROJECT'})
      console.log(this.listCat)

    },

    idFindName(id, obj) {
      console.log(id, obj)
      if(!obj) return
      let item
      for ( var i in obj) {
        console.log(i)
        if(obj[i].id == id) {
          item = obj[i]
        }
      }
      return item.name
    },

    toDetail(id, cId) {
      this.$emit('toDetail',{id, cId})
    },

    detailHide() {
      this.detailShow = false
    }
  }
}
</script>
<style scoped lang="less">
.MenuProjectWrap {
  width: 540px;
  position: absolute;
  top: 160px;
  left: 525px;
  //right: 0;
  //bottom: 0;
  //margin: auto;
  background: #666666;
  border-radius: 5px;
  border: 1px solid #666666;
  //transition: all 0.5s;
  .menuProjectTop {
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    position: relative;
    z-index: 20;
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
      //background: #666666;
      .rightCoinImg {
        transition: all .5s;
        width: 20px;
        height: 20px;
        color: #fff;
      }

    }
  }
  .menuProjectMe {
    width: 100%;
    height: 340px;
    position: relative;
    cursor: pointer;
    .project {
      width: 375px;
      height: 250px;
      margin-top: 45px;
      margin-left: 73px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .projectGif {
      width: 500px;
      height: 500px;
      border-radius: 0px 0px 5px 5px;
      opacity: 1;
      margin-top: -85px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .menuProjectMeDetail {
    .detailProject {
      width: 120px;
      height: 80px;
      border-radius: 0px 0px 5px 5px;
      margin: 40px 0 0px 30px;
    }
    .listDWrap {
      padding: 30px;
      box-sizing: border-box;
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;
      color: #fff;
      p {
        &:hover {
          color: #1A1A1A;
        }
      }
      .fir {
        width: 50%;
        float: left;
        margin-bottom: 50px;
        .title {
          color: #ffffff;
          cursor: default;
          font-size: 18px;
          font-weight: bold;
          img {
            width: 16px;
            height: 10px;
            margin-right: 6px;
          }
        }
        .sec {
          margin-left: 20px;
        }
      }
    }


  }
  &:hover {
    //background: #ED1C24;
  }
}
.MenuProjectWrapShadow {
  .rightCoinImg {
    transform: rotate(45deg);
  }
}
</style>