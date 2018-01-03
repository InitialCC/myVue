<template>
	<div class="ui-progressBar"
	:class="['ui-progressBar-' + type,
	status?'is-'+ status:'',
	{'ui-progress-text-inside':textInside}]">
	<div class="ui-progress" v-if="type==='line'">
		<div class="outer" :style="{height:strokeWidth+'px'}">
			<div class="inner" :style="barStyle">
				<div class="innerText" v-if="textInside">{{num}}%</div>
			</div>
		</div>
	</div>
	<div class="ui-progress-circle" :style="{width:circleWidth+'px',height:circleWidth+'px'}" v-else>
		<svg :width="circleWidth" :height="circleWidth" viewBox="0 0 440 440">
		<circle cx="220" cy="220" r="170" :stroke-width="strokeWidth" stroke="#D1D3D7" fill="none"></circle>
		<circle cx="220" cy="220" r="170" :stroke-width="strokeWidth" :stroke="stroke" fill="none" transform="matrix(0,-1,1,0,0,440)" :style="strokeDasharray"></circle>
		</svg>
	</div>
	<div class="ui-progressBar-text"  v-if="!textInside">
		<template v-if="!status">{{ num }} %</template>
		<i v-else :class="iconClass"></i>
	</div>
	</div>
</template>
<script>

	export default {
		name:'ui-progressBar',
		components:{
		},
		props:{
			type:{
				type:String,
				default:'line'
			},
			disabled:{
				type:Boolean,
				default:false
			},
			num:{
				type:Number,
				default:0
			},
			status:{
				type: String
			},
			strokeWidth:{
				type:Number,
				default:6
			},
			textInside:{
				type:Boolean,
				default:false
			},
			circleWidth:{
				type:Number,
				default:126
			}
		},
		data(){
			return {
				dragging:false
			}
		},
		computed:{
			barStyle(){
				var style = {}
				style.width = this.num + '%'
				return style
			},
			iconClass(){
				if(this.type==='line') {
					return this.status==='success'?'el-icon-circle-check':'el-icon-circle-cross'
				}
				else {
					return this.status==='success'?'icon-location':'icon-close2'
				}
			},
			strokeDasharray(){
				let perimeter = Math.PI * 2 * 170;
				var percent =  this.num / 100
				console.log(percent);
				return {
					strokeDasharray: (percent * perimeter + " " + perimeter * (1-percent))
				}
			},
			stroke(){
				let ret
				switch(this.status){
					case'success':
					ret = '#13ce66';
            		break;
            		default:
            		ret = '#20a0ff';
				}
				 return ret;
			}
		},
		methods:{
		
		}
	}
</script>
<style lang="scss">
 @import "../../assets/icons/icons";
 .ui-progress-circle {
 	display: inline-block;
 }
 .innerText {
 	display: inline-block;
    vertical-align: middle;
    color: #fff;
    font-size: 12px;
    margin: 0 5px;
 }
 .ui-progressBar.is-success{
    .inner {
    	background-color: #67c23a;
    }
    .ui-progressBar-text{
    	i{
    		color: #67c23a;
    	}
    }
}
.ui-progress-text-inside {
	.ui-progress {
		padding-right: 0;
    	margin-right: 0;
	}
}
.ui-progressBar-line {
	margin-bottom: 15px;
    	width: 350px;
}
.ui-progressBar {
	position: relative;
    line-height: 1;
   
}
.ui-progressBar-text {
	 font-size: 14px;
    color: #606266;
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
    line-height: 1;
    i {
    	 vertical-align: middle;
    	display: block;
    }
}
.ui-progress {
	padding-right: 50px;
    display: inline-block;
    vertical-align: middle;
	width:100%;
    margin-right: -55px;
    box-sizing: border-box;
    .outer {
	    border-radius: 100px;
	    background-color: #ebeef5;
	    overflow: hidden;
	    position: relative;
	    vertical-align: middle;
	    height: 6px;
    }
    .inner {
    	position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		background-color: #409eff;
		text-align: right;
		border-radius: 100px;
		line-height: 1;
		white-space: nowrap;
    }
}
.ui-progressBar-circle {
	margin-right:10px;
	display:inline-block;
	.ui-progressBar-text {
		 position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    text-align: center;
    margin: 0;
    transform: translateY(-50%);
	}
	&.is-success {
		//background-color: #67c23a;
	}

}
   
</style>