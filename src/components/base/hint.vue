<template>
	<div class="hint" v-show="visible">
		<ui-icon :name="iconName"></ui-icon>
		<div class="text">
			{{content}}
		</div>
	</div>
</template>
<script>
 import uiIcon from './icon'
	export default {
		name:'hint',
		components:{
			uiIcon
		},
		props:{
			visible:{
				type:Boolean,
				default:false
			},
			content:{
				type:String,
				default:''
			},
			type:{
				type:String,
				default:'text'
			}
		},
		computed:{
			iconName(){
				switch(this.type){
					case 'loading':
						return 'loading'
						break;
					case 'success':
						return 'success'
						break;
					case 'warn':
						return 'warn'
						break;
					default:
						return ''
						break;
				}
			}
		},
		watch:{
			visible(val){
				const _this = this;
				if(val){
					setTimeout(function(){
						_this.$emit('hideHint')
					},2000)
				}
			}
		}
	}
</script>
<style lang="scss">
	@import "../../assets/sass/variable";
	@import "../../assets/sass/mixin";
	.hint {
    width: 100px;
    height: 100px;
    border-radius: 5px;
    padding: 20px 0;
    opacity: 0.8;
    z-index: $z-index-modal;
    position: fixed;
    top: 50%;
    left: 50%;
    max-width: 200px;
    padding: $spacing-small $spacing-base;
    text-align: center;
    word-wrap: break-word;
    color: white;
    border-radius: $radius-large;
    background: #464646;
    transform: translate(-50%, -50%);
    [class^="icon-"], [class*=" icon-"] {
        display: inline-block;
        margin-top: $spacing-small;
        margin-bottom: $spacing-small;
        font-size: 32px;
        line-height: 1;
    }
    .icon-success {
        color: $color-success;
    }
    .icon-warn {
        color: #f76260;
    }
    .loading {
        margin-top: $spacing-small;
        margin-bottom: $spacing-small;
    }
    .hint-text {
        padding: 5px 0;
    }
}
</style>

