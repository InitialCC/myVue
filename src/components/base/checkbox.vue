<!--
    title: 多选按钮
    params:
        value: 被选中的值
        label: 当前单选的值，必填
        disabled：禁用单选状态，true表示禁用，false表示可用
        block: 是否为块级
        model: 触发当前数据双向绑定
-->


<template>
	<label class="checkbox-wrap" :class="{
		'checkbox-checked':isChecked,
		'checkbox-disabled':disabled
		}">
		<span class="checkbox">
			<span class="inner"></span>
			<input type="checkbox" class="checkbox-input" v-model="model" :value="label" @change="changeFn">
		</span>
		<slot></slot>
	</label>
</template>
<script>
	export default {
		name: 'checkbox',
		props:{
	   		value:Array,
	   		disabled:Boolean,
	   		label:{
	   			type:[String,Number,Boolean],
	   			required: true
	   		}
	    },
	    computed:{
			model:{
				get(){
					return this.value;
				},
				set(newVal){
	   				if(this.disabled){
	   					return false
	   				}
	   				this.$emit("input",newVal);
	   			}
		   	},
		   	isChecked(){
		   		for(let i = 0, len = this.value.length;i < len; i+=1){
		   			if(this.value[i] === this.label ){
		   				return true
		   			}
		   		}
		   		return false
		   	}
	   },
	   methods:{
	   		changeFn(event){
	   			if(this.disabled){
	   				return false
	   			}
	   			this.$emit('onChange',event)
	   		}
	   }
}
</script>
<style lang="scss">
		.checkbox-input {
			opacity: 0;
			display: none;
		}
		.checkbox-wrap {
			cursor: pointer;
		    display: inline-block;
		    margin-right: 8px;
		}
		.checkbox-disabled {
		    color: rgba(0, 0, 0, .25);
		    cursor: not-allowed;
		}
	.checkbox {
		    white-space: nowrap;
		    outline: none;
		    display: inline-block;
		    line-height: 1;
		    position: relative;
		    vertical-align: middle;
		.inner {
			position: relative;
		    top: 0;
		    left: 0;
		    display: inline-block;
		    width: 14px;
		    height: 14px;
		    border: 1px solid #d9d9d9;
		    -webkit-border-radius: 2px;
		    border-radius: 2px;
		    background-color: #fff;
		    -webkit-transition: all .3s;
		    transition: all .3s;
		    &:after {
		    	-webkit-transform: rotate(45deg) scale(0);
			    transform: rotate(45deg) scale(0);
			    position: absolute;
			    left: 4px;
			    top: 1px;
			    display: table;
			    width: 5px;
			    height: 8px;
			    border: 2px solid #fff;
			    border-top: 0;
			    border-left: 0;
			    content: ' ';
			    -webkit-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6);
			    transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6);
		    }
		}
	}
	.checkbox-checked {
		.inner{
			background-color: #108ee9;
   		    border-color: #108ee9;
   		    &:after {
	   		    -webkit-transform: rotate(45deg) scale(1);
			    transform: rotate(45deg) scale(1);
			    position: absolute;
			    left: 4px;
			    top: 1px;
			    display: table;
			    width: 5px;
			    height: 8px;
			    border: 2px solid #fff;
			    border-top: 0;
			    border-left: 0;
			    content: ' ';
			    -webkit-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
			    transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
   		    }
		}
	}
</style>