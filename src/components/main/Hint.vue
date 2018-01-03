<template>
	<div class="main-hint">
		<ui-hint :visible="visible" :content="content" :type="hintType" @hideHint="visible = false"></ui-hint>
 		 <h2>Hint</h2>
		 <div class="box">
		  <h3>提示框</h3>
		 	<p class="mark-p">触发业务逻辑时使用,点击触发。</p>
			  <ui-button @click.native="showHint">触发loding</ui-button>
			  <ui-button @click.native="showHint2" type="primary">成功提示</ui-button>
			  <ui-button @click.native="showHint3" type="warning">警告提示</ui-button>
		 </div>
		 <codeBlock :code="codeHint"></codeBlock>
	</div>
</template>
<script>
    import uiButton from "../base/button"
	import uiHint from "../base/hint"
	import codeBlock from "@/components/common/CodeBlock"
	import codeHint from '!raw-loader!../base/hint'
	
	export default {
		name:'main-hint',
		components:{
			uiButton,
			uiHint,
			codeBlock
		},
		data(){
			return {
				codeHint,
				visible:false,
				content:'',
				hintType:''
			}
		},
		methods:{
			showHint(){
				this.visible = true
				this.content = '正在加载'
				this.hintType ='loading'
			},
			showHint2(){
				this.visible = true
				this.content = '操作成功'
				this.hintType ='success'
			},
			showHint3(){
				this.visible = true
				this.content = '操作失败'
				this.hintType = 'warn'
			},
		}
	}
</script>