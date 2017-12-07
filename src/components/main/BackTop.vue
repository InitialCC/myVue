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
		<div class="space-box">占格子</div>
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
<style lang="scss">
@import "../../assets/sass/mixin";
	.scroll-top {
  position: fixed;
    bottom: 80px;
    right: 10px;
    @include px2px(width, 100px);
    @include px2px(height, 100px);
    border: 1px solid #d6d6d6;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
    .icon-arraw-up {
        display: block;
        @include px2px(margin-top, 8px);
    }
}
.space-box {
	padding-top:10px;
	height: 1000px;
}

</style>
