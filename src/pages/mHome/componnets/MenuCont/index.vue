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
      <div class="imgWrap"  v-show="showMenu" @click="ckImg">
        <img :src="menuCont" alt="" class="menuContImg" >
      </div>
      <div class="menuText">
        <p @click="this.$emit('CKABOUT')">ABOUT</p>
        <p @click="this.$emit('CKPROJECT')">PROJECT</p>
        <div v-show="secondShow" class="secondList">
          <p v-for=" i in this.listCat"  @click="ckProjectDetail(i.id)">
            <img :src="you" alt="" class="you" v-show="i.id == this.ckId">
            {{i.name}}
          </p>
        </div>
        <p @click="this.$emit('CKCONTACT')">CONTACT</p>
        <p @click="this.$emit('CKNEWS')">NEWS</p>
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
import {api} from '@/service/api/api'

export default {
  name: 'index',

  props: {
    secondShow: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      off: new URL('../../../../assets/image/menu-off-other.svg', import.meta.url).href,
      bottom: new URL('../../../../assets/MImage/bottom.png', import.meta.url).href,

      menuCont: new URL('../../../../assets/image/menuCont/menuCont.png', import.meta.url).href,
      menuAll: new URL('../../../../assets/image/menuCont/mAll.png', import.meta.url).href,
      you: new URL('../../../../assets/image/you.png', import.meta.url).href,

      showMenu: true,
      listCat: null,

      ckId: 8,

    }
  },

  methods: {
    ckOff() {
      this.$emit('ckOff')
    },

    async getAirticleCat() {
      let res = await api['articleCat']({
        id: 8,
      })
      this.listCat = res.data.data.category_list
      this.listCat = this.listCat.filter(i => {
        return !i.delete_time
      })
      this.listCat.unshift({id: 8, name: 'All PROJECT'})
      console.log(    this.listCat)
    },

    ckProjectDetail(id) {
      this.ckId = id
      this.$emit('ckProjectDetail', id)
      console.log(id)
    },
    ckImg() {
      this.$emit('ckImg')
    }

  },

  mounted() {
    this.getAirticleCat()


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
  z-index: 2;
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
      .secondList {
        //margin-left:10px;
        //margin-bottom: 20px;
        .you {
          width: 12rem;
          height: 12rem;
          float: left;
          margin-left: -20rem;
          margin-top: 10rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        p {
          font-size: 12rem;
          cursor: pointer;
          color: rgba(51,51,51,0.5);
          &:hover {
            color: #000;
          }
        }
      }
    }
    .menuOther {
      width: 150rem;
      height: 20rem;
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