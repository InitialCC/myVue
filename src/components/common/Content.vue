 <template>
 	 <div class="main-content">
 	 		<div class="main-inner">
 	 			 <router-view></router-view>
 	 		</div>
			<ui-BackTop>
			<a class="scroll-top" > <!-- v-show="isShow" @click='toTop' -->
					<i class="icon-arraw-up"></i>
					顶部
			</a>
			</ui-BackTop>
      </div>
 </template>
 <script>
 	import uiBackTop from "@/components/base/backTop"
 	export default {
 		components:{
 			uiBackTop
 		}
 	}
 </script>

 <style lang="scss">
 @import "../../assets/sass/mixin";
 	.main-content {
		margin-left: 3rem;
 	}
 	.main-inner {
 		margin:40px 0px 0px 40px;
 		width: 90%;
 		position:relative;
		.box {
		 		margin-bottom: 20px;
		 	}
 	}

 </style>
