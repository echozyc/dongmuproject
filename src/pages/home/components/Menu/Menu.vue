<template>
  <div class="menuWrap">
    <div class="menuTop">
      <div class="menuCoin"></div>
      <div class="menuText">MENU</div>
      <div class="rightCoin">
        <img :src="rightCoin" alt="" class="rightCoinImg">
      </div>
    </div>
    <div class="menuMe" @click="offMenu()">
      <img :src="MENU" alt="" class="MENUImg">
    </div>
    <div class="menuBot">
      <img :src="address" alt="" class="addressImg">
    </div>
  </div>
</template>
<script>
// import {drag} from '../../../../assets/js/func'
export default {
  name: 'Menu.vue',
  data() {
    return {
      rightCoin: new URL('../../../../assets/image/menu-off.svg', import.meta.url).href,
      address: new URL('../../../../assets/image/address.png', import.meta.url).href,
      MENU: new URL('../../../../assets/image/MENU.gif', import.meta.url).href
    }
  },

  mounted() {
    // drag('.menuTop', '.menuWrap')
  },

  methods: {
    offMenu() {
      this.$emit('offMenu', true)
    }
  }
}
</script>
<style scoped lang="less">
@import "Menu.less";
.menuWrap {
  width: 200px;
  height: 250px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background: #F1F1F1;
  border-radius: 5px;
  border: 1px solid #1A1A1A;
  transition: all 0.5s;
}
.menuTop {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #000;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
    color: #1A1A1A;
    flex: 1;
  }
  .rightCoin {
    width: 30px;
    height: 30px;
    float: right;
    border-left: 1px solid #000;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    .rightCoinImg {
      width: 20px;
      height: 20px;
    }

  }
}
.menuMe {
  width: 100%;
  height: 200px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .MENUImg {
    width: 150px;
    height: 150px;
  }
}
.menuBot {
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
</style>