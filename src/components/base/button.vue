<template>
	<button class="btn" :class="className" :type="nativeType">
	  <i v-if="icon" :class="iconName"></i>
	  <i v-if="loading"  class="icon-loading"></i>
		<slot></slot>
	</button>
</template>
<script>
    export default {
    	name:'button',
		props:{
			type:{
				type:String,
				default:'default'
			},
 			icon: {
                type: String
            },
			size:{
				type:String
			},
  			nativeType: {
                type: String,
                default: 'button'
            },
            hollow:{
            	type:Boolean
            },
            round:{
                type:Boolean
            },
            disabled:{
            	type:Boolean
            },
            loading:{
            	type:Boolean
            }
		},
        data(){
            return {
               
            }
        },
        mounted(){
           
           
        },
		computed:{
			className(){
				let cn ='';
				cn += this.size? ' btn-' + this.size : ''
				cn += this.type? ' btn-' + this.type : ''
				cn += this.hollow? ' z-hollow' : ''
				cn += this.disabled ? ' z-disabled' : ''
				cn += this.loading ? ' z-loading' : ''
                cn += this.round ? ' z-round' : ''
				return cn
			},
			iconName(){
				let icon = '';
				icon = this.icon?'icon-' + this.icon:''
				return icon
			}
		}
    }

</script>
<style lang="scss">

@import "../../assets/sass/mixin";
@import "../../assets/sass/variable";

.btn {
    padding: 9px 15px;
    @include px2px(font-size, $font-size-base);
    line-height: 1;
    color: $color-black;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    border: 1px solid $color-gray;
    border-radius: 5px;
    outline: none;
    background-color: $color-white;
    cursor: pointer;
    touch-action: manipulation;
    @include usn();
    transition: color .2s linear, background-color .2s linear, border .2s linear;
    &.z-disabled {
        cursor: not-allowed;
    }
    i[class^="icon-"] {
        margin-left: 3px;
        margin-right: 3px;
    }
    &.z-loading {
        position: relative;
        pointer-events: none;
        cursor: default;
        &:before {
            position: absolute;
            top: -1px;
            bottom: -1px;
            left: -1px;
            right: -1px;
            content: '';
            border-radius: inherit;
            pointer-events: none;
            background-color: rgba(255, 255, 255, 0.35);
        }
        i.icon-loading {
            transform-origin: center center;
            animation: circle 1.6s linear infinite;
        }
    }
}

@keyframes circle {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.btn-default {
    &.z-round {
        border-radius: 20px;
    }
    &:hover {
        color: $color-primary;
        border-color: $color-primary;
    }
    &.z-disabled {
        color: $color-gray;
        border-color: lighten($color-gray, 10%);
        background-color: $color-white;
    }
}

// 文字按钮
.btn-text {
    padding-left: 0;
    padding-right: 0;
    color: $color-info;
    border-color: transparent;
    background-color: transparent;
    &:active,
    &:focus,
    &:hover {
        color: lighten($color-info, 10%);
    }
    &.z-disabled {
        color: $color-gray;
        border-color: transparent;
        background-color: transparent;
    }
}

// 主要按钮
.btn-primary {
    color: $color-white;
    border-color: $color-primary;
    background-color: $color-primary;
    &:active,
    &:focus,
    &:hover {
        border-color: lighten($color-primary, 6%);
        background-color: lighten($color-primary, 6%);
    }
    // 镂空状态
    &.z-hollow {
        color: $color-primary;
        border-color: $color-primary;
        background-color: $color-white;
        &:active,
        &:focus,
        &:hover {
            color: $color-white;
            border-color: $color-primary;
            background-color:$color-primary;
        }
    }

}


/*各种颜色*/

.btn-info {
    color: $color-white;
    border-color: $color-info;
    background-color: $color-info;
    &:active,
    &:focus,
    &:hover {
        border-color: lighten($color-info, 6%);
        background-color: lighten($color-info, 6%);
    }
    // 镂空状态
    &.z-hollow {
        color: $color-info;
        border-color: $color-info;
        background-color: $color-white;
        &:active,
        &:focus,
        &:hover {
            color: $color-white;
            border-color: $color-info;
            background-color:$color-info;
        }
    }

}

.btn-success {
    color: $color-white;
    border-color: $color-success;
    background-color: $color-success;
    &:active,
    &:focus,
    &:hover {
        border-color: lighten($color-success, 6%);
        background-color: lighten($color-success, 6%);
    }
    // 镂空状态
    &.z-hollow {
        color: $color-success;
        border-color: $color-success;
        background-color: $color-white;
        &:active,
        &:focus,
        &:hover {
            color: $color-white;
          border-color: $color-success;
        background-color: $color-success;
        }
    }

}

.btn-warning {
    color: $color-white;
    border-color: $color-warning;
    background-color: $color-warning;
    &:active,
    &:focus,
    &:hover {
        border-color: lighten($color-warning, 6%);
        background-color: lighten($color-warning, 6%);
    }
    // 空状态
    &.z-hollow {
        color: $color-warning;
        border-color: $color-warning;
        background-color: $color-white;
        &:active,
        &:focus,
        &:hover {
            color: $color-white;
            background-color: $color-warning;
            border-color: $color-warning;
        }
    }

}

.btn-danger {
    color: $color-white;
    border-color: $color-danger;
    background-color: $color-danger;
    &:active,
    &:focus,
    &:hover {
        border-color: lighten($color-danger, 6%);
        background-color: lighten($color-danger, 6%);
    }
    // 镂空状态
    &.z-hollow {
        color: $color-danger;
        border-color: $color-danger;
        background-color: $color-white;
        &:active,
        &:focus,
        &:hover {
            color: $color-white;
            background-color:$color-danger;
            border-color: $color-danger;
        }
    }

}

.btn-primary,
.btn-info,
.btn-success,
.btn-warning,
.btn-danger {
    // 按钮不可用
    &.z-disabled {
        color: $color-gray;
        border-color: lighten($color-gray, 10%);
        background-color: $color-white-dark;
    }
    // 镂空状态不可用
    &.z-hollow {
        &.z-disabled {
            color: $color-gray;
            border-color: lighten($color-gray, 10%);
            background-color: $color-white;
        }
    }
&.z-round {
        border-radius: 20px;
    }
}


/*不同大小*/

.btn-large {
    padding: 12px 15px;
    @include px2px(font-size, $font-size-large);
}
.btn-normal {
    padding: 9px 13px;
    @include px2px(font-size, $font-size-base);
}

.btn-small {
    padding: 7px 10px;
    @include px2px(font-size, $font-size-smaller);
}


/*不同大小*/

.btn-roup {
    &:before,
    &:after {
        content: " ";
        display: table;
    }
    &:after {
        clear: both;
    }
    .btn+.btn {
        border-left-color: rgba(255, 255, 255, 0.5);
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .btn {
        float: left;
        &:first-child {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
        &:last-child {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }
}

</style>