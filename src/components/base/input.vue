<template>
	<div class="ui-input-wrap" :class="{'ui-select-disabled': disabled}">
		<input type="text" v-model="model" :readonly="readonly" class="ui-input" :disabled="disabled" :placeholder="placeholder">
	</div>
</template>
<script>
	export default {
		name:'input',
		props:{
			value:[String,Number],
			placeholder: String,
			readonly:Boolean,
			disabled:Boolean
		},
		computed:{
			model:{
				get(){
					return this.value;
				},
				set(newVal){
					this.$emit('input',newVal);
				}
			}
		},
		methods:{
			
		}
	}
</script>
<style lang="scss">
.ui-input-wrap, .ui-input {
  	display: inline-block;
    width: 100%;
    position: relative;
}
.ui-input {
    height: 32px;
    line-height: 1.5;
    padding: 4px 7px;
    font-size: 12px;
    border: 1px solid #d7dde4;
    border-radius: 4px;
    color: #657180;
    background-color: #fff;
    background-image: none;
    cursor: text;
    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out
    &:focus,&:hover {
    	   border-color: #5cadff
    }
}
.ui-select-disabled {
    background-color: #f3f3f3;
    cursor: not-allowed;
    color: #ccc
}
</style>
