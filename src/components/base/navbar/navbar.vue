<template>
	<div class="ui-navbar" v-if="size > 1" :class="{'navIcon':type}"   @onTabClick: handleTabClick>
		<slot></slot>
	</div>
	<div v-else class="ui-navbar">
		<slot></slot>
	</div>
</template>
<style>
	.ui-navbar {
		font-size: 0;
	}
</style>
<script>
	export default {
		name:'ui-navbar',
		data(){
			return {
				navbars:[]
			}
		},
		props:{
			activeKey:{
				type:[Number,String],
				default:0
			},
			type:{
				type:String
			}
		},
		computed:{
			size(){
				return this.navbars.length;
			}
		}
	}
</script>