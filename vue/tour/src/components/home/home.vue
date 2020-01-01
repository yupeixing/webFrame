<style lang="css" scoped>
@import url("./home.css");
</style>
<template>
  <div class="home">
    <van-row type="flex" justify="space-between" align="center">
      <van-col span="5" class="city">选择城市</van-col>
      <van-col span="16">
        <van-search placeholder="请输入搜索关键词" v-model="value" class="key" />
      </van-col>
      <van-col span="3" class="message">
        <van-icon name="chat-o" />
      </van-col>
    </van-row>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="../../assets/imgs/swiper01.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/imgs/swiper02.jpg" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <van-row class="items">
      <van-col span="6" class="item">
        <van-icon name="fire-o" size="20" class="active"/>
        <div class="active">攻略</div>
      </van-col>
      <van-col span="6" class="item">
        <van-icon name="hotel-o" size="20"/>
        <div>酒店</div>
      </van-col>
      <van-col span="6" class="item">
        <van-icon name="phone-o" size="20"/>
        <div>机票火车票</div>
      </van-col>
      <van-col span="6" class="item">
        <van-icon name="orders-o" size="20"/>
        <div>门票</div>
      </van-col>
    </van-row>
    <van-row type="flex" justify="space-around" align="center" class="card">
      <van-col span="7" class="item">
        <div class="title">先领卷再下单</div>
        <div class="subhead">抢大额红包</div>
      </van-col>
      <van-col span="7" class="item two">
        <div class="title">每日打卡</div>
        <div class="subhead">网红打卡日</div>
      </van-col>
      <van-col span="7" class="item three">
        <div class="title">新人专区</div>
        <div class="subhead">领660元大礼包</div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {
    msg: String
  },
  data() {
    return {
      active: "home",
      value: "",
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  }
};
</script>