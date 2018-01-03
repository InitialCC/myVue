<template>
	<div class="main-swiper">
        <h2>Swiper轮播图</h2>
                 <h3>简单例子</h3>
        <div class="box">
                       <p>使用方式</p>
            <ui-swiper :autoplay="2000">
                <ui-swiper-item>1</ui-swiper-item>
                <ui-swiper-item>2</ui-swiper-item>
                <ui-swiper-item>3</ui-swiper-item>
                <ui-swiper-item>4</ui-swiper-item>
            </ui-swiper>
        </div>
	</div>
</template>
<script>
import uiSwiper from '@/components/base/swiper/swiper'
import uiSwiperItem from '@/components/base/swiper/swiperItem'
export default {
  name:"main-swipe",
  data(){
    return {
     /*   bgArr:['red','yellow','green','black']*/
    }
  },
  components:{
     uiSwiper,
     uiSwiperItem
  }
}
</script>
<style>
  .my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>
