<template>
  <div>
    <van-tabbar v-model="active" route active-color="#07c160" inactive-color="#000">
      <van-tabbar-item name="home" to="/" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item name="find" to="/find" icon="flower-o">发现</van-tabbar-item>
      <van-tabbar-item name="tour" to="/tour" icon="goods-collect-o">行程</van-tabbar-item>
      <van-tabbar-item name="mine" to="/mine" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "footers",
  props: {
    msg: String
  },
  data() {
    return {
      active: 'home'
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>