<template>
  <div class="CNews">
    <div class="menuTop">
      <div class="icon"></div>
      <span class="titleText">NEWS</span>
      <div class="rightIcon" @click="clickOff()">
        <img :src="off" alt="">
      </div>
    </div>
    <div class="menuM">
      <div class="listWrap" v-for="i in listData">
        <div class="itemCont" @click="showI(i)">
          <p>{{i.post_title}}</p>
        </div>
        <div class="itemContDetail" v-show="i.contShow">
<!--          <p class="title">{{i.post_title}}</p>-->
          <p v-html="i.post_content"></p>
          <div class="shangWrap" @click="offItem(i)">
            <img :src="shang" alt="">
          </div>

        </div>

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

      listData: [],


    }
  },

  methods: {
    async getData() {
      let res = await api['article_list']({
        id: 9,
      })
      this.listData = res.data.data.article_list.articles
      this.listData.map(i => {
        i.itemShow = false
        if (i.post_content !== '') {
          // 替换富文本为rem
          i.post_content = i.post_content.replace(/(\d+)px/g, function(s, t) {
            s = s.replace('px', '');
            var value = parseInt(s) * 0.01; // 100px = 1rem
            return value + "rem";
          });
        }
      })
      console.log(this.listData)
    },

    showI(i) {
      this.listData.map(n => {
        if(n != i) n.contShow = false
      })
      i.contShow = !i.contShow
    },
    offItem(i) {
      i.contShow = false
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
.CNews {
  width: 650rem;
  //height: 650rem;
  background: #1A1A1A;
  margin: 71rem auto;
  border-radius: 10rem;
  position: relative;
  z-index: 100;
  overflow: hidden;
  .menuTop {
    width: 100%;
    height: 64rem;
    background: #0020F5;
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
      border-bottom: 1rem solid #ffffff;
      float: right;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #666666;
      img {
        width: 40rem;
        height: 40rem;
      }
    }
  }
  .menuM {
    box-sizing: border-box;
    margin-bottom: 30rem;
    .listWrap {
      padding: 0 31rem;
      box-sizing: border-box;
      .itemCont {
        width: 100%;
        min-height: 90rem;
        line-height: 90rem;
        border-bottom: 1rem dashed rgba(255,255,255,0.2);
        p {
          font-size: 24rem;
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 0;
          white-space: nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
        }

      }
      &:last-child {
        .itemCont {
          border: none;
        }
      }
      .itemContDetail {
        /deep/ img {
          width: 100% !important;
          height: auto !important;
        }
        .shangWrap {
          width: 100%;
          height: 30rem;
          //background: #1d39c4;
          position: relative;
          img {
            width: 30rem !important;
            height: 30rem !important;
            position: absolute;
            top: 0;
            right: 20rem;

          }
        }
      }

    }

  }



}

</style>