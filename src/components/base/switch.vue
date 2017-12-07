<template>
	<div class="ui-switch" :class="{'ui-switch-checked':value}">
		<input type="checkbox" class="ui-switch-input" v-model="model" @click="toggle">
		<span class="inner">
			  <slot name="open" v-if="value"></slot>
            <slot name="close" v-if="!value"></slot>
		</span>
	</div>
</template>
<script>
	export default{
		name:'switch',
		props:{
			value:{
				type:Boolean,
				default:false
			}
		},
		computed:{
			model:{
				get(){
					return this.value
				},
				set(newVal){
					this.$emit('input',newVal)
				}
			}
		},
		methods:{
			toggle(){
				const checked = !this.value;
				this.$emit('on-checked',checked);
			}
		}

	}
</script>
<style lang="scss">
	.ui-switch {
   		 width: 48px;
        height: 24px;
        line-height: 22px;
        border-radius: 24px;
        display: inline-block;
        vertical-align: middle;
        border: 1px solid #ccc;
        background-color: #ccc;
        position: relative;
        cursor: pointer;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        transition: all .2s ease-in-out;
        z-index: 2;
        .inner {
        	    color: #fff;
		        font-size: 12px;
		        position: absolute;
		        left: 25px
		}
		    &:after {
		    	 content: '';
		        width: 20px;
		        height: 20px;
		        border-radius: 20px;
		        background-color: #fff;
		        position: absolute;
		        left: 1px;
		        top: 1px;
		        cursor: pointer;
		        transition: left .2s ease-in-out,width .2s ease-in-out
		    }
	}

	.ui-switch-checked {
		      border-color: #39f;
        background-color: #39f;
        .inner {
        	left: 8px;
        }
        &:after{
		    left: 25px;
        }
	}
	.ui-switch-input {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    cursor: pointer;
}
</style>