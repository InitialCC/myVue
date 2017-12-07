<template>
	<div class="main-swipe">
        <div class="box">
            <h2>简单例子</h2>
            <swipe class="my-swipe">
              <swipe-item class="slide1">Slide1</swipe-item>
              <swipe-item class="slide2">Slide2</swipe-item>
              <swipe-item class="slide3">Slide3</swipe-item>
            </swipe>
        </div>
	</div>
</template>
<script>
import swipe from '@/components/base/swipe/swipe'
import swipeItem from '@/components/base/swipe/swipeItem'
export default {
  name:"main-swipe",
  components:{
     swipe,
     swipeItem
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
