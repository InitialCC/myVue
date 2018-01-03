<template>
  <div id="app">

  <ui-menu>
  </ui-menu>
  <ui-content>
  </ui-content>

    
  
  </div>
</template>

<script>
import logoImg from "@/assets/icons/images/vue.png"
import uiMenu from '@/components/common/Menu'
import uiContent from '@/components/common/Content'
export default {
  name: 'app',
  data(){
    return {
      imgUrl:"@/assets/icons/images/vue.png"
    }
  },
  components:{
    uiMenu,
    uiContent
  }
}
</script>

<style lang="scss">
.logo {
      width: 45px;
    height: 45px;
    display: inline-block;
    >img {
      width: 100%;
    }
}
@import "./assets/sass/base.scss";
@import "./assets/sass/normalize.scss";
</style>
