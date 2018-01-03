<template>
	<div class="modal"  v-show="visible">
        <transition name="fade">
            <div class="shadow" v-show="visible" @click="submit(false)" ></div>
        </transition>
		<div class="inner">
			<header class="modal-hd">{{title}}</header>
  			<section class="modal-bd" v-if="!modal_input">
                {{content}}
        	</section>
    		<section class="modal-bd" v-if="modal_input">
           		 <input type="text" class="input" v-model="inputMsg"/>
        	</section>
        	<footer class="modal-footer">
        		<ui-button :class="type === 'confirm'?'comright':''" @click.native="ok" type="text">{{okText}}</ui-button>
        		<ui-button :class="type === 'confirm'?'comleft':'' " @click.native="cancel" v-if="type==='confirm'">{{cancelText}}</ui-button>
        	</footer>
		</div>
	</div>

</template>
<script>
import uiButton from '../base/button'
	export default {
		name:'modal',
		components:{
			uiButton
		},
		props:{
			title:{
				type:String
			},
			type:{
				type:String,
				default:'alert'
			},
			content:{
				type:String
			},
			modal_input: {
                default: false
			},
			okText:{
                type: String,
            	default: '确定'
			},
			cancelText:{
				type:String,
				default:'取消'
			},
			visible:{
				type: Boolean,
                default: false
			},
			 callback: {
			     default: null
			}
		},
		methods:{
			ok(){
				if(typeof this.callback === 'function'){
					this.callback(true)
				}
			},
			cancel(){
				if(typeof this.callback === 'function'){
					this.callback(false)
				}
			}
		}
	}
</script>
<style lang="scss">
@import "../../assets/sass/variable";
@import "../../assets/sass/mixin";

.modal {
   position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;
    .inner {
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 400px;
    border-radius: $radius-base;
    background-color: $color-white;
    transform: translate(-50%, -50%);
    z-index: 100;
	}
    .shadow {
     width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 200;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
        z-index: 1;
    }
}



.modal-hd {
    padding: 10px;
    text-align: center;
    font-size: 16px;
    color: $color-black;
    border-bottom: 1px solid $color-gray-light;
}

.modal-bd {
    padding: 30px 60px;
    font-size: 14px;
    word-wrap: break-word;
    word-break: break-all;
    color: $color-black;
    .input {
        width: 100%;
        height: 40px;
    }
}

.modal-footer {
    text-align: center;
    border-top: 1px solid $color-gray-light;
}

.modal-btn {
    color: $color-primary;
    border: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background-color: $color-white;
    &:first-child {
        width: 50%;
    }
    &:last-child {
        // width: 100%;
    }
    &+& {
        width: 50%;
        border-left: 1px solid $color-gray-light;
    }
}

.comleft {
    float: left;
    width: 50%;
    color: #666;
}

.comright {
    float: right;
    width: 50%;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .35s
}
.fade-enter, .fade-leave-active {
    opacity: 0
}

</style>

