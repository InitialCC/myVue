<template>
	<div class="main-icon">
		<h2>Icon 图标</h2>
		<p>直接通过设置类名为 icon-iconName 来使用即可</p>
		<div class="box">
		<h3>使用方法</h3>
		<div class="demo-icons">
           <div class="icon-item" v-for="item in items">
           		<ui-icon :name="item.name"></ui-icon>
           		<div>{{'icon-'+item.name}}</div>
           </div>
        </div>
        <h3>图标</h3>
        <div class="demo-icons">
 		    <div class="icon-item" v-for="item in items2">
           		<ui-icon :name="item.name"></ui-icon>
           		<div>{{'icon-'+item.name}}</div>
           </div>
        </div>
		</div>
	</div>
</template>
<script>
import uiIcon from "@/components/base/icon";
	export default {
		name:'main-icon',
		components:{
			uiIcon
		},
		data(){
			return {
				items:[
					{name:'arr-right'},
					{name:'download'},
					{name:'voucher'}
				],
				items2:[
					{name:'download'},
					{name:'upload'},
					{name:'voucher'},
					{name:'book'},
					{name:'lock2'},
					{name:'coupon'},
					{name:'email'},
					{name:'editor'},
					{name:'newspaper'},
					{name:'null'},
					{name:'nofind'},
					{name:'medal'},
					{name:'zfb'},
					{name:'wx'},
					{name:'back'},
					{name:'broadcast'},
					{name:'shop'},
					{name:'calendar2'},
					{name:'loading'},
					{name:'calendar2'},
					{name:'question'},
					{name:'warn'},
					{name:'good2'},
					{name:'fire'},
					{name:'flag'},
					{name:'sort'},
					{name:'triangle-down'},
					{name:'crown'},
					{name:'bad'},
					{name:'good'},
					{name:'add'},
					{name:'del'},
					{name:'close'},
					{name:'close2'},
					{name:'play'},
					{name:'camera'},
					{name:'bookmark'},
					{name:'keep'},
					{name:'i'},
					{name:'record'},
					{name:'course'},
					{name:'home'},
					{name:'course'},
					{name:'user'},
					{name:'search'},
					{name:'toggle'},
					{name:'tel'},
					{name:'collected'},
					{name:'collect'},
					{name:'share'},
					{name:'heart'},
					{name:'hearted'},
					{name:'phone'},
					{name:'lock'},
					{name:'code'},
					{name:'see'},
					{name:'nosee'},
					{name:'call'},
					{name:'clock'},
					{name:'map'},
					{name:'address'},
					{name:'location'},
					{name:'calendar'},
					{name:'right'},
					{name:'wrong'},
					{name:'time'},
					{name:'news'},
					{name:'arr-left'},
					{name:'arr-right'},
					{name:'arr-up'},
					{name:'arr-down'},
					{name:'arraw-up'},
					{name:'arraw-down'},
					{name:'triangle-right'},
					{name:'shield'},
					{name:'bookmark'}
				]
			}
		},
	
		mounted(){

		}
	}
</script>
<style lang="scss">
	   @import "../../assets/icons/icons";
	  .demo-icons {
	  	.icon-item {
	   	display: inline-block;
	    width: 120px;
	    margin: 10px 5px 10px 0;
   		 text-align: center;
    	i {
    		font-size: 20px;
    		color: #666;
    	}
	   }
	  	}
</style>