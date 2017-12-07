<!--
    title: 单选按钮
    params:
        value: 被选中的值
        label: 当前单选的值，必填
        disabled：禁用单选状态，true表示禁用，false表示可用
        model: 监听单选当前选中的值，并触发单选新值变化
-->
<template>
	<label class="ui-radio" :class="{
		'ui-radio-checked': label === model,
		'ui-radio-disabled': disabled
	     }">
		<span class="inner"></span>
		<input type="radio" :value="label" v-model="model" :disabled="disabled" >
		<slot></slot>
	</label>
</template>
<script>
    export default {
		name:"radio",
		props:{
			value: [String, Number],
			label:{
				type:[String,Number],
				required:true
			},
			disabled:Boolean
		},
		computed: {
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
	   		changeFn(event){
	   			if(this.disabled){
	   				return false
	   			}
	   			this.$emit('onChange',event);
	   		}
		}
	}
</script>
<style lang="scss">
	@import "../../assets/sass/base.scss";
	@import "../../assets/sass/normalize.scss";
    .ui-radio {
        @include px2rem(margin-right, 10);
        white-space: nowrap;
        outline: 0;
        line-height: 1;
        cursor: pointer;
        position: relative;
        .inner {
            @include px2rem(width, 16);
            @include px2rem(height, 16);
            @include px2rem(margin-right, 5);
            display: inline-block;
            position: relative;
            top: 2px;
            left: 0;
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 50%;
            transition: all .2s ease-in-out;
            &:after {
                position: absolute;
                @include px2rem(width, 8);
                @include px2rem(height, 8);
                @include px2rem(left, 3);
                @include px2rem(top, 3);
                border-radius: 50%;
                display: table;
                border-top: 0;
                border-left: 0;
                content: ' ';
                background-color: #3399ff;
                opacity: 0;
                transition: all .2s ease-in-out;
                transform: scale(0);
            }
        }
        input {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1;
            opacity: 0;
            cursor: pointer;
        }
    }
.ui-radio-checked {
    .inner {
        border-color: #3399ff;
        &:after {
            opacity: 1;
            transform: scale(1);
            transition: all .2s ease-in-out;
        }
    }
}
.ui-radio-disabled{
    cursor: not-allowed;
    .inner{
        border-color: #d7dde4;
        background-color: #f3f3f3;
        &:after{
            background-color: #ccc;
        }
    }
}
</style>