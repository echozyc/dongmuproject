<template>
  <div class="MenuContWrap">
    <div class="menuContTop">
      <div class="menuCoin"></div>
      <div class="menuText">MENU</div>
      <div class="rightCoin" @click="offMenu()">
        <img :src="rightCoin" alt="" class="rightCoinImg">
      </div>
    </div>
    <div class="menuContMe">
      <div class="imgWrap"  v-show="showMenu">
        <img :src="menuCont" alt="" class="menuContImg">
      </div>
      <div class="imgWrap2" v-show="!showMenu">
        <img :src="menuContw" alt="" class="menuContImgw ">
      </div>
      <div class="menuText">
        <p @click="ck('1')" :class="{red: id == 1}">ABOUT</p>
        <p @click="ck('2')" :class="{red: id == 2}">PROJECT</p>

        <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
        >

          <div v-show="secondShow && id == 2" class="secondList">
            <p v-for=" i in this.listCat"  @click="ckProjectDetail(i.id)">
              <img :src="you" alt="" class="you" v-show="i.id == this.ckId">
              {{i.name}}
            </p>
          </div>

        </transition>
        <p @click="ck('3')" :class="{red: id == 3}">CONTACT</p>
        <p @click="ck('4')" :class="{red: id == 4}">NEWS</p>
      </div>
      <div class="menuOther">
<!--        <div class="menuleft">-->
<!--          <img :src="menuleft" alt="" class="menuContImg">-->
<!--        </div>-->
<!--        <div class="menuCoin">-->
<!--          <img :src="menuCoin" alt="" class="menuContImg">-->
<!--        </div>-->
<!--        <div class="menuright">-->
<!--          <img :src="menuright" alt="" class="menuContImg">-->
<!--        </div>-->
        <div class="menuC">
          <img :src="menuAll" alt="" class="menuContImg">
        </div>
      </div>
    </div>
    <div class="menuContBot">
      <img :src="address" alt="" class="addressImg">
    </div>
  </div>
</template>
<script>
import {drag} from "../../../../assets/js/func";
import {api} from '@/service/api/api'

export default {
  name: 'MenuCont',
  data() {
    return {
      rightCoin: new URL('../../../../assets/image/menu-off.svg', import.meta.url).href,
      address: new URL('../../../../assets/image/address.png', import.meta.url).href,
      menuCont: new URL('../../../../assets/image/menuCont/menuCont.png', import.meta.url).href,
      menuContw: new URL('../../../../assets/image/menuCont/menuContw.png', import.meta.url).href,
      menuleft: new URL('../../../../assets/image/menuCont/m1.png', import.meta.url).href,
      menuright: new URL('../../../../assets/image/menuCont/m2.png', import.meta.url).href,
      menuCoin: new URL('../../../../assets/image/menuCont/m3.png', import.meta.url).href,
      menuAll: new URL('../../../../assets/image/menuCont/mAll.png', import.meta.url).href,
      you: new URL('../../../../assets/image/you.png', import.meta.url).href,


      secondShow: false,
      id: 0,
      listCat: null,

      showMenu: true,

      ckId: 8,
    }
  },

  mounted() {
    drag('.menuContTop', '.MenuContWrap')
    this.getAirticleCat()
  },

  methods: {
    offMenu() {
      this.$emit('onMenu', false)
    },

    ck(id) {
      this.id = id
      if(id == 2) {
        this.secondShow = !this.secondShow
        this.showMenu = false
        // this.ckProjectDetail('8')
        // return
      }
      this.showMenu = true
      this.$emit('ck', id)
    },

    ckProjectDetail(id) {
      this.ckId = id
      this.$emit('ckProjectDetail', id)
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
    },

    showList() {
      this.id = 2
      this.secondShow = true
    }
  }
}
</script>
<style scoped lang="less">
.MenuContWrap {
  width: 200px;
  //height: 443px;
  position: absolute;
  top: 235px;
  left: 62px;
  //right: 0;
  //bottom: 0;
  //margin: auto;
  background: #F1F1F1;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #1A1A1A;
  z-index: 99;
  //transition: all 0.5s;
  .menuContTop {
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #000;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #000;
    color: #fff;
    .menuCoin {
      width: 10px;
      height: 10px;
      background: #ED1C24;
      opacity: 1;
      border: 1px solid #1A1A1A;
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
      border-left: 1px solid #000;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      .rightCoinImg {
        width: 20px;
        height: 20px;
      }

    }
  }
  .menuContMe {
    width: 100%;
    //height: 393px;
    background: #F1F1F1;
    padding-top: 50px;
    padding-left: 50px;
    margin-bottom: 30px;
    .imgWrap {
      width: 52px;
      height: 100px;
      background: #F1F1F1;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
      margin-bottom: 30px;
      .menuContImg {
        width: 100%;
        height: 100%;
      }
    }
    .imgWrap2 {
      width: 152px;
      height: 100px;
      background: #F1F1F1;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
      margin-bottom: 30px;
      margin-left: -20px;
      .menuContImgw {
        width: 100%;
        height: 100%;
      }
    }
    .menuText {
      font-size: 12px;
      font-family: PingFang SC-Semibold, PingFang SC;
      font-weight: 600;
      color: #1A1A1A;
      p {
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        color: #1A1A1A;
        &:hover {
          //color: red;
        }
      }
      .red {
        //color: red;
      }
      .secondList {
        //margin-left:10px;
        margin-bottom: 20px;
        .you {
          width: 12px;
          height: 12px;
          float: left;
          margin-left: -20px;
          margin-top: 3px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        p {
          font-size: 12px;
          cursor: pointer;
          color: rgba(51,51,51,0.5);
          &:hover {
            color: #000;
          }
        }
      }
    }
    .menuOther {
      width: 150px;
      height: 20px;
      margin-top: 60px;
      margin-left: -35px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .menuright {
        width: 50px;
        height: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .menuleft {
        width: 50px;
        height: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .menuCoin {
        width: 5px;
        height: 5px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .menuC {
        width: 140px;
        img {
          width: 100%;
        }
      }
    }
  }
  .menuContBot {
    width: 100%;
    height: 20px;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    .addressImg {
      width: 153px;
      height: 7px;
    }
  }
}



</style>