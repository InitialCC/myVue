<template>
<div class="main-select">
	 <h2>select 选择器</h2>
     <p>基本组件-选择器，一般用于数据选择。</p>
     <div class="box">
     	<h3>基础用法</h3>

     	<ui-select :items="list" v-model="value1" placeholder="请选择">
     		
     	</ui-select>
     	<p>您选择了:{{value1}}</p>
     </div>
       <codeBlock :code="codeSelect" :open="true"></codeBlock>
</div>
</template>
<script>
    import codeSelect from '!raw-loader!../base/select'
	import codeBlock from"@/components/common/CodeBlock"
	import uiSelect from '@/components/base/select'
	import { province} from '../../assets/js/city-data.js'
	export default {
		name:'main-select',
		components:{
			uiSelect,
			codeBlock
		},
		data(){
			return {
				codeSelect,
				value1:'',
				list:''
			}
		},
		created(){
			this.list =  province;
		},
		methods:{
			
		}
	}
</script>