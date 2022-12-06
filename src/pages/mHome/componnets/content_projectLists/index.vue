<template>
  <div class="contentProjectWrap">
    <div class="listWrap">
      <div class="contWrap">

        <div class="cont">
          <!--          ID 不等于8情况-->
          <p v-for=" i in listData" class="sec" v-if="catId != 8">
            <span  @click="toDetail(i.id, i.category_id)"> {{ i.post_title }}</span>
          </p>

          <!--          ID 等于8情况-->
          <div v-for=" k in listObj" class="fir" v-if="catId == 8">
            <p v-for=" i in k" class="sec" >
              <span  @click="toDetail(i.id, i.category_id)"> {{ i.post_title }}</span>
            </p>
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
      listData: null,

      listCat: null,
      listObj: null,
      catId: null,


    }
  },

  methods: {
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
        this.$emit('ckDetail', {
          id: id,
          cId: cId
        })
        // this.$refs.menuProjectCont.getArticle(id, cId)
      })
    },

  },

  mounted() {

  },
}
</script>
<style scoped lang="less">
.contentProjectWrap {
  width: 430rem;
  float: right;
  margin-top: 20rem;
  margin-right: 20rem;
  .listWrap {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-top: 30rem;
    .contWrap {
      position: relative;
      z-index: 10;
      overflow: hidden;
      .cont {
        font-size: 32rem;
        line-height: 34rem;
        font-weight: 600;
        color: #FFFFFF;
        .sec {
          margin-bottom: 40rem;
        }
        .fir {
          margin-bottom: 140rem;
          .sec {
            margin-bottom: 40rem;
          }
        }
      }
    }
  }
}
</style>