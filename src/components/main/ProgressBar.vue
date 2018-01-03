<template>
	<div class="main-progressBar">
		<h2>Progress 进度条</h2>
		<div class="box">
			<h3>线形进度条 — 百分比外显</h3>
			<ui-progressBar ></ui-progressBar>
			<ui-progressBar :num="70"></ui-progressBar>
			<ui-progressBar :num="100" status="success"></ui-progressBar>
		</div>
		<div class="box">
			<h3>线形进度条 — 百分比内显</h3>
			<ui-progressBar :stroke-width="18"></ui-progressBar>
			<ui-progressBar :num="70" :stroke-width="18" :text-inside="true"></ui-progressBar>
			<ui-progressBar :num="100" :stroke-width="18" :text-inside="true" status="success"></ui-progressBar>
		</div>
		<div class="box">
		<h3>环形进度条</h3>
		<ui-progressBar type="circle"></ui-progressBar>
		<ui-progressBar type="circle" :num="25"  ></ui-progressBar>
		<ui-progressBar type="circle" :num="100" status="success"></ui-progressBar>
	</div>
		
	</div>
</template>
<script>
	import uiProgressBar from "@/components/base/progressBar"
	export default {
		name:'main-progressBar',
		components:{
			uiProgressBar
		}
	}
</script>