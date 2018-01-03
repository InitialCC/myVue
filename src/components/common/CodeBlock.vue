<template>
<div>
	<div class="code-btn" @click="toggle()">
			<i></i>
			<span class="btnText">{{ btnText }}</span>
	</div>
	<transition name="fade">
	<div class="code-block" v-show="codeOpen">
		<div class="code-nav">
			<ul>
				<li v-for="(item,index) in items" :class="{'active': index === curIndex}" @click="changeIndex(index)">{{item}}</li>
			</ul>
		</div>
	<div class="code-content">
			<transition name="bounce">
				 <markdown :text="html" class="markdown-style" v-show="curIndex === 0">
				</markdown>
			</transition>
			<transition name="bounce">
				<markdown :text="script" class="markdown-style" v-show="curIndex === 1">
				</markdown>
			</transition>
			<transition name="bounce">
				<markdown :text="scss" class="markdown-style" v-show="curIndex === 2">
				</markdown>
			</transition>
	</div>
	</div>
	</transition>
	</div>
</template>
<script>
/*
@  \s是指空白，包括空格、换行、tab缩进等所有的空白，而\S刚好相反
   这样一正一反下来，就表示所有的字符，完全的，一字不漏的。
@ []这个符号，表示在它里面包含的单个字符不限顺序的出现。
例如:[\s\S]* 只要出现多类型空白，或非空白 都匹配
*/

import markdown from './Markdown.vue'
	export default {
		name:'codeBlock',
		props:{
			code:{
				type:String,
				default:''
			},
			description:{
				type:String
			},
			open:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return {
				items:['HTML','JS','SCSS'],
				curIndex:0,
				codeOpen:false,
				slideHeight:0,
				layerHeight:0
			}
		},

		methods:{
			changeIndex(index){
				//this.slideHeight = this.layerHeight;
				this.curIndex = index;

			},
			toggle(){
				this.codeOpen = !this.codeOpen;
				if(this.codeOpen) {

				}
			}
		},
		 watch:{
		 	curIndex(index){
		 	
		 		console.log(index);
		 	}
		 },
		mounted(){

			if(this.open){
				this.codeOpen = this.open;
				//this.slideHeight = this.layerHeight;
			}
		},
		components:{
			markdown
		},
		computed:{
			btnText(){
				if(this.codeOpen == false){
					return '显示代码'
				}
				else {
					return '隐藏代码'
				}
			},
			html(){
				//console.log(this.code);
				//match 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配
				if (this.code.match(/<template>([\s\S]*?)<\/template>/)) {
                	return `\`\`\`html
    			${this.code.match(/<template>([\s\S]*?)<\/template>/)[1]}
           					 \`\`\``
            		} else {
                	return '暂无 HTML'
           		 }
			},
			script(){
				return `\`\`\`javascript
				${this.code.match(/<script>([\s\S]*?)<\/script>/)[1]}
				    \`\`\``
			},
			scss(){
				if(this.code.match(/<style lang="scss">([\s\S]*?)<\/style>/)){
						return `\`\`\`scss
						${this.code.match(/<style lang="scss">([\s\S]*?)<\/style>/)[1]}
						 \`\`\``
				}else {
					return '暂无 scss'
				}
			}
		}
	}
</script>
<style lang="scss">
@import "../../assets/sass/mixin.scss";
.code-content {
	position:relative;
}
	.code-btn {
		border-top: 1px solid #eaeefb;
	    height: 44px;
	    line-height: 44px;
	    box-sizing: border-box;
	    background-color: #f4f7fd;
	    border-bottom-left-radius: 4px;
	    border-bottom-right-radius: 4px;
	    text-align: center;
	    margin-top: -1px;
	    cursor: pointer;
	    position: relative;
	    color: #409eff;
	    transition: .1s;
	    -moz-user-select: none;
	    -webkit-user-select: none;
	    -ms-user-select: none;
	}
	.isFixed{
		position: fixed;
    	bottom: 0;
    	width: 1540px;
	}
	.btnText {
	    -ms-transform: translateX(-30px);
	    transform: translateX(-30px);
	    transition: .3s;
	}
	.code-nav {
		>ul{
			@include clearfix;
			>li {
				cursor: pointer;
				width: 33.3%;
			    float: left;
			    text-align: center;
			    height: 50px;
			    line-height: 50px;
			    border: 1px solid #bfbebe;
			    &.active {
			    	border-color:#5cadff;
			    }
			}
		}
	}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .3s;
}
.bounce-leave-active {
  animation: bounce-in .3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

</style>