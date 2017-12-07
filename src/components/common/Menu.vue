<template>
	<div class="menu-fixed">
		<div class="menu-title">
			
		</div>
		 <ul class="useUl">
        	<menu-tree :items="homeData"></menu-tree>
        </ul>
         <ul class="useUl">
        	<menu-tree :items="baseData"></menu-tree>
        </ul>

	</div>
</template>
<script>
	import menuTree from "@/components/common/MenuTree"
	export default {
		name:"menu",
		components:{
			menuTree
		},
		data(){
			return {
				homeData:{
					name:'开始',
					router:'/home',
					children:[
						{
							name:"介绍",
							router:'/home/intro'
						}
					]
				},
				baseData:{
					name:'基础组件',
					router:'/base',
					children:[
						{
							name:"select",
							router:'/base/select'
						},
						{
							name:"checkbox",
							router:'/base/checkbox'
						},
						{
							name:"radio",
							router:'/base/radio'
						},
						{
							name:"control",
							router:'/base/control'
						},
						{
							name:"input",
							router:'/base/input'
						},
						{
							name:"switch",
							router:'/base/switch'
						},
						{
							name:"modal",
							router:'/base/modal'
						},
						{
							name:"backTop",
							router:'/base/backTop'
						},
						{
							name:"slider",
							router:'/base/slider'
						},
						{
							name:'picker',
							router:'/base/picker'
						},
						{
							name:'rate',
							router:'/base/rate'
						}
					]
				}
			}
		}
	}
</script>
<style lang="scss">
	.menu-fixed {
		    position: absolute;
    top: 0;
    left: 0;
    width: 3rem;

    overflow: hidden;
    z-index: 1;
    box-shadow: 0px 0px 10px #333;
	}
</style>