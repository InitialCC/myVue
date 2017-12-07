<template>
	<div class="main-input">
		 <h2>Input 文本输入框</h2>
		 <p>基本组件-文本输入框，一般用于表单文本输入。</p>
		  <div class="box">
                <h3>基本使用</h3>
                <ui-input v-model="value1" placeholder="请输入您要输入的内容" ></ui-input>
                <p>您输入了：{{value1}}</p>
         </div>
          	<div class="box">
     		<h3>禁止使用</h3>
     		<ui-input :readonly="true">
     		
     		</ui-input>
    	 	</div>
    	 	 <codeBlock :code="codeInput"></codeBlock>
	</div>
</template>
<script>
	import codeInput from '!raw-loader!../base/input'
	import codeBlock from"@/components/common/CodeBlock"
	import uiInput from "@/components/base/input"
	export default {
		name:"main-input",
		components:{
			uiInput,
			codeBlock
		},
		data(){
			return {
				codeInput,
				value1:''
			}
		}
	}
</script>