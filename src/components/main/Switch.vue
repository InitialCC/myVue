<template>
	<div class="main-switch">
		  <h2>switch 开关</h2>
		  <p>基本组件-switch 开关，一般用于选择状态。</p>
		  <div class="box">
		  	<h3>基础用法</h3>
		  	<ui-switch  v-model="value1" @on-checked="checkSwitch">
		  		
		  	</ui-switch>
		  	<p>开关的值为：{{value1}}</p>
		  </div>
		    <div class="box">
		  	<h3>带文字的开关</h3>
		  	<ui-switch  v-model="value2" @on-checked="checkSwitch">
		  		  <span slot="open">开</span>
                   <span slot="close">关</span>
		  	</ui-switch>
		  	<p>开关的值为：{{value2}}</p>
		  </div>
		   <codeBlock :code="codeSwitch"></codeBlock>
	</div>
</template>
<script>
import uiSwitch from "@/components/base/switch"
import codeSwitch from '!raw-loader!../base/switch'
import codeBlock from"@/components/common/CodeBlock"

export default {
	name:'main-switch',
	components:{
		uiSwitch,
		codeBlock
	},
	data(){
		return {
			codeSwitch,
			value1:false,
			value2:false,
			switchStatus: false
		}
		
	},
	methods:{
		 checkSwitch(val){
		 	console.log(val);
			this.switchStatus = val;
		}
	}
}
</script>