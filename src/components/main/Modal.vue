<template>
	<div class="main-modal">
		<ui-modal :title="title" :content="content" :type="modalType" :visible="visible" :callback="ok"></ui-modal>
		 <h2>Modal</h2>
		 <p>modal功能组件</p>
		 <div class="box">
		 <h3>模态框</h3>
		  <p class="mark-p">触发业务显示内容或者提示用户做出选择时，经常用到。</p>
		 		<ui-button @click.native="showModal">点我触发 alert</ui-button>
		 		<ui-button type="primary" :hollow="false" @click.native="showConfirm">点我触发 confirm</ui-button>
		 </div>
		 <codeBlock :code="codeModal"></codeBlock>
	</div>
</template>
<script>
	import uiButton from "../base/button"
	import uiModal from "../base/modal"
	import codeBlock from"@/components/common/CodeBlock"
	import codeModal from '!raw-loader!../base/modal'
	export default {
		name:'main-modal',
		components:{
			uiButton,
			uiModal,
			codeBlock
		},
		data(){
			return {
				codeModal,
				title:'',
				content:'',
				modalType: 'alert',
				visible:false,
				ok: null
			}
		},
		methods:{
			showModal(){
				this.visible = true
				this.modalType = 'alert'
				this.title = 'alert-title'
				this.content = 'alert文本内容'
				this.ok = () => {
					this.visible = false
				}
				/*let _self = this;
				this.ok = function(){
					_self.visible = false;
				}*/
			},
			showConfirm(){
				this.visible = true
				this.modalType = 'confirm'
				this.title = 'confirm-title'
				this.content = 'confirm 文本内容'
				this.ok= () => {
					this.visible = false;
				}
			}
		}
	}
</script>


