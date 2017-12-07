<template>
	<div class="main-modal">
		<ui-modal :title="title" :content="content" :type="modalType" :visible="visible" :callback="ok"></ui-modal>
		<ui-hint :visible="visible2" :content="content2" :type="hintType" @hideHint="visible2 = false"></ui-hint>
		 <h2>Modal 模态框</h2>
		 <div class="box">
		  <p class="mark-p">功能组件，触发业务显示内容或者提示用户做出选择时，经常用到。</p>
		 		<ui-button :size="'large'"  @click.native="showModal">点我触发 alert</ui-button>
		 		<ui-button  type="primary" :hollow="false" @click.native="showConfirm">点我触发 confirm</ui-button>
		 </div>
		 <h2>hint 提示框</h2>
		 <div class="box">
		 	<p class="mark-p">功能组件，触发业务逻辑时使用,点击触发。</p>
			 <ui-button @click.native="showHint">触发loding</ui-button>
			  <ui-button @click.native="showHint2" type="primary">成功提示</ui-button>
			  <ui-button @click.native="showHint3" type="warning">警告提示</ui-button>
		 </div>
	</div>
</template>
<script>
	import uiButton from "../base/button"
	import uiModal from "../base/modal"
	import uiHint from "../base/hint"
	export default {
		name:'main-modal',
		components:{
			uiButton,
			uiModal,
			uiHint
		},
		data(){
			return {
				title:'',
				content:'',
				content2:'',
				modalType: 'alert',
				hintType:'',
				visible:false,
				visible2:false,
				ok: null
			}
		},
		methods:{
			showModal(){
				this.visible = true
				this.modalType = 'alert'
				this.title = 'alert-title'
				this.content = 'alert文本内容'
				this.ok= () =>{
					this.visible = false
				}
				/*let _self = this;
				this.ok = function(){
					_self.visible = false;
				}*/
			},
			showHint(){
				this.visible2=true
				this.content2= '正在加载'
				this.hintType='loading'
			},
			showHint2(){
				this.visible2=true
				this.content2= '操作成功'
				this.hintType='success'
			},
			showHint3(){
				this.visible2=true
				this.content2= '操作失败'
				this.hintType='warn'
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


