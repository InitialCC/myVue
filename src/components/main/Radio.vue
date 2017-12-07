<template>
	<div class="main-radio">
		<h2>Radio 单选框</h2>
		<p class="mark-p">基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。</p>
		
		<div class="box">
		 	<h3 class="title">单独使用</h3>
		 	<ui-radio  v-model="radio1"  :label="0">
				<span>单独使用</span>
			</ui-radio>
			<p>已选择：{{radio1}}</p>
		</div>

		<div class="box">
		 	<h3 class="title">多按钮组合使用</h3>
	 		<ui-radio v-model="radio2" :label="'上海'">上海</ui-radio>
	 		<ui-radio v-model="radio2" :label="'北京'">北京</ui-radio>
			<p>已选择：{{radio2}}</p>
		</div>
		
		<div class="box">
		<h3 class="title">禁用</h3>
			 <ui-radio v-model="radio3" :label="radio3" :disabled="true">选中不可用</ui-radio>
		 	 <ui-radio v-model="radio4" :label="'不可用'" :disabled="true">不可用</ui-radio>
		</div>
		<codeBlock :code="codeRadio"></codeBlock>
	</div>
</template>
<script>
	import uiRadio from "@/components/base/radio"
 	import codeRadio from '!raw-loader!../base/radio'
	import codeBlock from"@/components/common/CodeBlock"

	export default {
		name:'main-radio',
		components:{
			uiRadio,
			codeBlock
		},
		data(){
			return {
				codeRadio,
				radio1:'',
				radio2:'',
				radio3:0,
				radio4:''
			}
		}
	}
</script>