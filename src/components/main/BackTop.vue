<template>
	<div class="main-backTop">
		<h2>backTop 回到顶部</h2>
		<p>功能组件，在 页面长度过长时候 使用。</p>
		<div class="box">
			<p>滑动鼠标，注意右下角</p>
			<ui-BackTop>
 				<a class="scroll-top" > <!-- v-show="isShow" @click='toTop' -->
                    <i class="icon-arraw-up"></i>
                    顶部
            	</a>
			</ui-BackTop>
		</div>
		<codeBlock :code="codeGotop"></codeBlock>
	
	</div>
</template>

<script>
	import codeGotop from "!raw-loader!../base/backTop"
	import uiBackTop from "@/components/base/backTop"
	import codeBlock from"@/components/common/CodeBlock"
	export default {
		name:'main-backTop',
		components:{
			uiBackTop,
			codeBlock
		},
		data(){
			return {
				codeGotop
			}
		}
	}
</script>
<style lang="scss" scope>

 @import "../../assets/icons/icons";


</style>
