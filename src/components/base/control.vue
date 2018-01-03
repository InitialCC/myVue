<template>
	<div class="ui-control">
		<span class="add ui-icon" :class="{'icon-disabled': value >= maxNum }" @click="plus">+</span>
		<span class="mins ui-icon" :class="{'icon-disabled': value <= minNum}" @click="minus">-</span>
		<input type="text" v-model="model" class="ui-control-input">
	</div>
</template>
<script>
export default {
    name: 'ui-control',
    props:{
		value:[String,Number],
		stepNum:{
			type:Number,
			default:1
		},
		 minNum: {
            type: Number,
            default: 0
        },
		 maxNum: {
            type: Number,
            default: Infinity
        },
        placeholder:String
	},
    computed:{
    	model:{
    		get(){
    			return this.value
    		},
    		set(newVal){
    			this.$emit("input",newVal)
    		}
    	}
    },
    methods:{
    	plus(){
    		if(this.value >= this.maxNum ){
    			return false
    		}
    		const _val = parseInt(this.value) + this.stepNum
    		if(_val <= this.maxNum){
				this.$emit('input',_val)
        		this.$emit('onPlus',_val)
    		}
    	},
    	minus(){
    		if(this.value <= this.minNum){
    			return false;
    		}
    		const _val = parseInt(this.value) - this.stepNum;
    		if(_val >= 0) {
    			this.$emit('input',_val)
    			this.$emit('onMins',_val)
    		}

    	}
    },
	mounted() {
        if (this.value <= this.minNum) {
            this.$emit('input', this.minNum)
        }
    }
  }
</script>
<style lang="scss">
@import "../../assets/sass/variable.scss";
		.ui-control {
			display: inline-block;
			position:relative;
			width: 100px;
			text-align: center;
			  .ui-control-input {
			    	width: 50px;
			    	text-align: center;
			    }
		}
		.ui-icon {
			border: 1px solid $color-blue;
		    border-radius: 50px;
		    width: 20px;
		    height: 20px;
		    position: absolute;
		    text-align: center;
		    &.add {
		    	right:0;
		    }
		    &.mins {
		    	left:0;
		    }
		}
	
		.icon-disabled {
			    border: 1px solid #ddd;
			    color: #ddd;
		}
</style>