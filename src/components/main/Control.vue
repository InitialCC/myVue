<template>
	<div class="main-control">
		<h2>Control 控制器</h2>
		  <p>基本组件-计数器，一般用于表单数字的计数选择。</p>
		  <div class="box">
		  		<h3 class="title">基础用法</h3>
		  	 <p class="">基本使用，默认最小值为0，最大值不设限，可直接输入数字，当输入的是非数字是，会默认删除。</p>
		  	 <div> <ui-control  v-model="value1" placeholder="请输入数字"></ui-control></div>
		  	
		  	 <p>您输入了：{{value1}}</p>
		  </div>
		  <div class="box">
		  	<h3 class="title">带数字限制用法</h3>
		  	<p>可以设置最大值和最小值，当当前值小于最小默认值时，当前值会置为默认值最小值，如：当前值为5，默认最小值为5，最大值为10</p>
		  	<div> <ui-control  v-model="value2" placeholder="请输入数字" :minNum="5" :maxNum="10"></ui-control></div>
		  	
		  	 <p>您输入了：{{value2}}</p>
		  </div>
		    <div class="box">
		  	<h3 class="title">带数字限制用法</h3>
		  	<p>可以修改计数器的当前步数，当减小或增大后的值小于最小值或大于最大值，则计数器不继续执行，如当前步数为5步，最小值为0，最大值为30</p>
		  	<div> <ui-control  v-model="value3" placeholder="请输入数字" :stepNum="5" :maxNum="30"></ui-control>
		  	</div>
		  	 <p>您输入了：{{value3}}</p>
		  </div>
		   <codeBlock :code="codeControl"></codeBlock>
	</div>
</template>
<script>
 	import codeControl from '!raw-loader!../base/control'
	import codeBlock from"@/components/common/CodeBlock"
	import uiControl from '@/components/base/control'
	export default {
		name:'main-control',
		components:{
			uiControl,
			codeBlock
		},
		data(){
			return {
				codeControl,
				value1:1,
				value2:1,
				value3:0
			}
		}
	}
</script>