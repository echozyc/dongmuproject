<template>
  <div class="CAbout">
    <div class="menuTop">
      <div class="icon"></div>
      <span class="titleText">ABOUT TOMO</span>
      <div class="rightIcon" @click="clickOff()">
        <img :src="off" alt="">
      </div>
    </div>
    <div class="menuM">
      <p class="p1" v-html="pageData.post_content"></p>
    </div>

    <div class="bt">
      <div class="leftImg">
        <img :src="about" alt="" class="about">
      </div>
      <div class="rightImg"  @click="clickOff()">
        <img :src="shang" alt="" class="shang">
      </div>

    </div>

  </div>
</template>
<script>
import {api} from '@/service/api/api'

export default {
  name: 'index',

  data() {
    return {
      off: new URL('../../../../assets/image/menu-off-other.png', import.meta.url).href,
      about: new URL('../../../../assets/image/about/about.png', import.meta.url).href,
      shang: new URL('../../../../assets/image/shang.png', import.meta.url).href,

      pageData: {},
      post_content: '',


    }
  },

  methods: {
    async getData() {
      let res = await api['page']({
        id: 1,
      })
      this.pageData = res.data.data
      this.post_content =  res.data.data.post_content
      console.log(this.post_content)

      // if (this.post_content !== '') {
      //   // 替换富文本为rem
      //   this.post_content = this.post_content.replace(/(\d+)px/g, function(s, t) {
      //     s = s.replace('px', '');
      //     var value = parseInt(s) * 0.01; // 100px = 1rem
      //     return value + "rem";
      //   });
      // }
      console.log(this.post_content)
    },

    clickOff() {
      this.$emit('clickOff')

    }

  },

  mounted() {
    this.getData()

  }
}
</script>
<style scoped lang="less">
.CAbout {
  width: 650rem;
  //height: 650rem;
  background: #1A1A1A;
  margin: 71rem auto;
  border-radius: 10rem;
  position: relative;
  z-index: 100;
  .menuTop {
    width: 100%;
    height: 64rem;
    border-bottom: 1rem solid #ffffff;
    .icon {
      width: 16rem;
      height: 16rem;
      background: #ED1C24;
      opacity: 1;
      border: 1rem solid #ffffff;
      border-radius: 50%;
      float: left;
      margin-top: 24rem;
      margin-left: 30rem;
    }
    .titleText {
      font-size: 20rem;
      float: left;
      font-weight: 500;
      margin-left: 9rem;
      margin-top: 14rem;
      color: #ffffff;
    }
    .rightIcon {
      width: 64rem;
      height: 64rem;
      border-left: 1rem solid #ffffff;
      float: right;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 40rem;
        height: 40rem;
      }
    }
  }
  .menuM {
    padding: 30rem;
    box-sizing: border-box;
    .p1 {
      /deep/ img {
        max-width: 90% !important;
        height: auto !important;
      }
    }

  }
  .bt {
    width: 100%;
    height: 150rem;
    background: #1A1A1A;
    border-top: 1px solid #fff;
    box-sizing: border-box;
    position: relative;
    .leftImg {
      width: 100px;
      height: 24px;
      position: absolute;
      top: 28px;
      left: 20px;
      .about {
        width: 100%;
        height: 100%;
      }
    }
    .rightImg {
      width: 25px;
      height: 25px;
      position: absolute;
      top: 28px;
      right: 22px;
      cursor: pointer;
      .shang {
        width: 100%;
        height: 100%;
      }

    }



  }



}

</style>