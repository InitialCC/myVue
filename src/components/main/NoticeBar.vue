<template>
	<div class="main-noticeBar">
		<h2>NoticeBar通告栏</h2>
		<p>基础用法</p>
		<div class="box"><notice-bar text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"></notice-bar></div>
		<p>禁用滚动</p>
		<div class="box">
			<notice-bar :scrollable="false" text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"></notice-bar>
			<p>文字内容多于一行时，可通过scrollable参数控制是否开启滚动</p>
		</div>
	
	

	</div>
</template>
<script>
	import noticeBar from "@/components/base/noticeBar"
	export default {
		name:'main-noticeBar',
		components:{
			noticeBar
		}
	}
</script>