<template>
  <div id="app">
  <ui-menu>
  </ui-menu>
  <ui-content>
  </ui-content>

    
  
  </div>
</template>

<script>
import uiMenu from '@/components/common/Menu'
import uiContent from '@/components/common/Content'
export default {
  name: 'app',
  components:{
    uiMenu,
    uiContent
  }
}
</script>

<style lang="scss">
.main-right {

}
@import "./assets/sass/base.scss";
@import "./assets/sass/normalize.scss";
</style>
