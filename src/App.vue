<template>
<!--  <div>-->
<!--    <a href="https://vitejs.dev" target="_blank">-->
<!--      <img src="/vite.svg" class="logo" alt="Vite logo" />-->
<!--    </a>-->
<!--    <a href="https://vuejs.org/" target="_blank">-->
<!--      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />-->
<!--    </a>-->
<!--  </div>-->
<!--  <HelloWorld msg="Vite + Vue" />-->

  <!-- 路由菜单 -->
<!--  <router-link to='/'>首页</router-link>-->
<!--  <router-link to='/find'>发现</router-link>-->
<!--  <router-link to='/user'>我们</router-link>-->
  <!-- 视图容器 -->
  <router-view />
</template>

<script>
export default {
  mounted() {
    const detectDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? "Mobile" : "Desktop"; // "Mobile" or "Desktop"
    if(detectDeviceType() == 'Mobile') {
      console.log('Mobile')
      this.$router.push({
        path: '/index',
      })
    }
  }
}
</script>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
