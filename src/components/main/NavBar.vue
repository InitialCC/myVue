<template>
	<div class="main-navBar">
		<h2>NavBar导航</h2>
		<div class="box">
			<h3>基本方式</h3>
			<ui-navbar :active-key="activeKey" @tab-click="handClick()">
				<ui-navbar-item title="默认导航" ></ui-navbar-item>
				<ui-navbar-item title="带消息提示导航1"   :info="1" ></ui-navbar-item>
				<ui-navbar-item title="带消息提示导航10"  :info="10" ></ui-navbar-item>
				<ui-navbar-item title="带消息提示导航99"  :info="99"></ui-navbar-item>
			</ui-navbar>
			<ui-navbar :active-key="activeKey2" type="navIcon">
				<ui-navbar-item title="home"  icon="home" @click="onClick2"></ui-navbar-item>
				<ui-navbar-item title="user" icon="user" @click="onClick2"></ui-navbar-item>
				<ui-navbar-item title="collected" icon="collected"  @click="onClick2"></ui-navbar-item>
			</ui-navbar>
		</div>
	</div>
</template>
<script>
	import uiNavbar from "@/components/base/navbar/navbar"
	import uiNavbarItem from "@/components/base/navbar/navbarItem"
	export default {
		name:"main-navBar",
		components:{
			uiNavbar,
			uiNavbarItem
		},
		data(){
			return {
				activeKey:0,
				activeKey2:0
			}
		},
		methods:{
			onClick(key){
				this.activeKey = key;
			},
			handClick(key){
				console.log(key);
			},
			onClick2(key){
				this.activeKey2 = key;
			}
		}
	}
</script>