<template>
	<div class="main-rate">
			<div class="box">
			<h2>Basic Rate</h2>
			<p class="mark-p">基础使用</p>
			<rate :length="5" ></rate>

			</div>
			<div class="box">
			<h2>Default value Rate</h2>
			<p class="mark-p">默认方式</p>
			<rate :length="5" :value="3" ></rate>
			
			</div>
			<div class="box">
			<h2>desc Rate</h2>
			<p class="mark-p">描述方式</p>
			<rate :length="5" :value="2" :rateDesc="descArr" :showcount="true"></rate>
			
			</div>
			<div class="box">
			<h2>readOnly Rate</h2>
			<p class="mark-p">只读方式</p>
			<rate :length="5" :value="2" :readonly="true"></rate>
		
			</div>
			<div class="box">
			<h2>Disabled Rate</h2>
			<p class="mark-p">禁用方式</p>
			<rate :length="5" :value="1" :disabled="true"></rate>
			</div>
	</div>
</template>
<script>
import rate from "@/components/base/rate"
	export default {
		name:'main-rate',
		components:{
			rate
		},
		data(){
			return {
				descArr:['Very bad', 'bad', 'Normal', 'Good', 'Very good']
			}
		}
	}
</script>