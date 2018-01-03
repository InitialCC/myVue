<template>
	<div class="main-checkbox">
		<h2>Checkbox 多选框</h2>
		<p>主要用于一组可选项单项选择，或者单独用于切换到选中状态。</p>
		<div class="box">
			<h3 class="title">单独使用</h3>
		 	<ui-checkbox  v-model="checkbox1"  :label="data1">
				<span>{{ data1 }}</span>
			</ui-checkbox>
			<p>已选择：{{checkbox1}}</p>
		</div>
		<div class="box">
		<h3 class="title">多组合使用</h3>
			<ui-checkbox v-model="checkAll" :label="dataAll" @onChange="isCheckAll">全选</ui-checkbox>
			<div>
				<ui-checkbox  v-model="checkbox2" v-for="item in data2" :label="item" :key="item" @onChange="isCheck">
					<span >{{ item }}</span>
				</ui-checkbox>
			</div>
			<p>已选择：{{checkbox2}}</p>
		</div>
		<div class="box">
		<h3 class="title">禁用</h3>
			<ui-checkbox v-model="checkbox3" :label="data3" :disabled="true">未选择禁用</ui-checkbox>
            <ui-checkbox v-model="checkbox4" :label="data4" :disabled="true">已选择禁用</ui-checkbox>
		</div>
		<codeBlock :code="codeCheckbox"></codeBlock>
	</div>
</template>
<script>
import uiCheckbox from "@/components/base/Checkbox.vue";
import codeBlock from"@/components/common/CodeBlock"
import codeCheckbox from '!raw-loader!../base/checkbox'
import { isArray } from "@/assets/js/util.js";
	export default {
		name:'main-checkbox',
		components:{
			uiCheckbox,
			codeBlock
		},
		data(){
			return {
				codeCheckbox,
				data1:"中国",
				checkbox1: [],
				data2:['北京', '上海', '广州', '深圳'],
				checkbox2:[],
				checkAll:[],
				dataAll:'1',
				data3:'',
				checkbox3:[],
				data4:true,
				checkbox4:[true],
			}
		},
		methods:{
			isCheckAll(){
				this.checkbox2 = this.checkAll.length ? this.data2:[]
			},
			isCheck(){
				const arr = this.dataAll.toString().split("");//String转为array
				this.checkAll = this.checkbox2.length === this.data2.length ? arr :[]
					
				//alert(1);
			},
			
		}
	}
</script>
<style>
	.box {
		margin-bottom: 30px;
		border: 1px solid #eee;
		padding-left: 20px;
		padding-bottom:20px;
	}
</style>