<template>
	<div class="main-picker">
	<h2>Pciker 选择器</h2>
     <p>功能组件，在选择日期、时间、省市区等选项时使用。</p>
     <div class="box">
     	<h3>基础用法</h3>
		<div class="wrap">
			<ui-button @click.native="show = true">选择地址</ui-button>
                <p>省：{{result.province.name}} {{result.province.code}}</p>
                <p>市：{{result.city.name}} {{result.city.code}}</p>
                <p>区：{{result.area.name}} {{result.area.code}}</p>
			<ui-picker :show="show" @picker-submit="pickerHandle"></ui-picker>
		</div>
     </div>
     <codeBlock :code="codePicker"></codeBlock>
	</div>
</template>
<script>
	import uiPicker from "@/components/base/picker"
	import uiButton from "@/components/base/button"

	import codePicker from '!raw-loader!../base/picker'
	import codeBlock from"@/components/common/CodeBlock"
	export default {
		name:'main-picker',
		components:{
			uiPicker,
			uiButton,
			codeBlock
		},
		data(){
			return {
				codePicker,
				result:{
					province:'',
					city:'',
					area:''
				},
				show:false
			}
		},
		
		methods:{
			pickerHandle(result){
				this.show = false
				this.result = result
			}
		}
	}
</script>