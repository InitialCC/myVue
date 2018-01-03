<template>
	<div class="main-rate">
		<h2>Rate</h2>
		<h3>Basic Rate</h3>
		<div class="box">
			<p class="mark-p">基础使用</p>
			<ui-rate :length="5" ></ui-rate>
		</div>
		<h3>Default value Rate</h3>
		<div class="box">
			<p class="mark-p">默认方式</p>
			<ui-rate :length="5" :value="3" ></ui-rate>
		</div>
		<h3>desc Rate</h3>
		<div class="box">
			<p class="mark-p">描述方式</p>
			<ui-rate :length="5" :value="2" :rateDesc="descArr" :showcount="true"></ui-rate>
		</div>
		<h3>readOnly Rate</h3>
		<div class="box">
			<p class="mark-p">只读方式</p>
			<ui-rate :length="5" :value="2" :readonly="true"></ui-rate>
		</div>
		<h3>Disabled Rate</h3>
		<div class="box">
			<p class="mark-p">禁用方式</p>
			<ui-rate :length="5" :value="1" :disabled="true"></ui-rate>
		</div>
		<codeBlock :code="codeRate"></codeBlock>
	</div>
</template>
<script>
import uiRate from "@/components/base/rate"
import codeRate from '!raw-loader!../base/rate'
import codeBlock from"@/components/common/CodeBlock"
	export default {
		name:'main-rate',
		components:{
			uiRate,
			codeBlock
		},
		data(){
			return {
				codeRate,
				descArr:['Very bad', 'bad', 'Normal', 'Good', 'Very good']
			}
		}
	}
</script>