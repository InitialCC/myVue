<!--
 slice（start,end）
对于数组对象来说，slice方法提取从start下标起 以end下标为结尾的一段元素（但不包括end下标的元素）,
然后返回新的数组，对原数组没有任何是影响，
当参数为负时 则该参数 是从 数组的末尾 索引 开始算起
（-1 指的是 数组中倒数第一个元素， -2 指的是，数组中倒数第二个元素。）
slice(3, -3) 截取下标3到3的元素

		 Array.from 对伪数组或可迭代对象(包括arguments Array,Map,Set,String...)转换成数组对象。
 -->
<template>
	<div class="ui-select">
		  <uiInput v-model="model" :placeholder="placeholder" :readonly="true" :disabled="disabled" @click.native="showBox"></uiInput>
		  	<transition name="fade">
		  		<div class="ui-select-shadow" v-show="show" @click="submit(false)" >
		  		</div>
		  	</transition>
		     <transition name="expand-select">
		     	<div class="ui-select-box"  v-show="show" @mousewheel="_stopDef">
		     		<div class="ui-select-header">
		     			 <div class="ui-select-cancel" @click="submit(false)">{{cancel}}</div>
                    {{title}}
                    	<div class="ui-select-confirm" @click="submit(true)">{{confirm}}</div>
		     		</div>
		     		 <div class="ui-select-content">
		     		 	 <div class="ui-select-list">
		     		 	 	<ul @touchstart="_onTouchStart('listState', $event)"
		     		 	 		@mousedown="_onTouchStart('listState', $event)"
								:style="{'transform' : 'translate3d(0,' + listState.translateY + 'px, 0)'}"
								:class="{'dragging':listState.dragging}"
		     		 	 		>
		     		 	 		<li></li>
	                            <li></li>
	                            <li></li>
	                            <li v-for="( item,index ) in listState.data"
									:data-id="item.code"
									:data-name="item.name"
									:class="{'current':item.code === listState.selectedId,
											'node1': Math.abs(index - listState.index) == 1,
											'node2': Math.abs(index - listState.index) == 2,
											'node3': Math.abs(index - listState.index) >= 3
									}"
		                            >{{ item.name }}</li>
		     		 	 	</ul>
		     		 	 </div>
		     		 </div>
		     		   <hr class="line-top">
               		   <hr class="line-bottom">
		     	</div>
		     </transition>
	</div>
</template>
<script>

import uiInput from "../base/input.vue";
	export default{
		name:'select',
		components:{
			uiInput
		},
		props:{
			items: Array,
			value: String,
			placeholder:{
				type:String,
				default:'请选择'
			},
			disabled:{
				type:Boolean,
				default:true
			},
			title: {
                type: String,
                default: '请选择'
            },
            cancel:{
            	type: String,
                default: '取消'
            },
            confirm:{
            	 type: String,
                default: '确定'
            }
		
		},
		computed: {
            model: {
                get: function () {
                    return this.value
                },
                set: function (newValue) {
                    this.$emit('input', newValue)
                }
            }
        },
        mounted(){
        	this.init();
        },
        data(){
        	return {
        		show:false,
        		listState:{
					data:null,
					startPos: null, //touch 坐标触发位置
					translateY:0,//滚动的距离
					startTranslateY:0,
					dragging: false,
					 selectedId: null, //id值
					 index:0 //索引值
				},
				inputValue:'',
				delta:0,
				dom:null,
				result:{
					id:'',
					name:'',
					code:''
				}
        	}
        },
        methods:{
        	init(){
        		//初始化列表数据
        		this.listState.data = this.items
        		this.listState.selectedId = this.items[0].code
        		this.inputValue = this.items[0].name;
        		this.result.id = this.items[0].parentId
                this.result.name = this.items[0].name
                this.result.code = this.items[0].code
        	},
        	_onTouchStart(target,e){
        		this.delta = 0
        		let thisData = this[target]
        		this.target = target
        		//console.log(this.listState===thisData  true);
        		this.slideEls = this._getElem(e)
        		thisData.startPos = this._getTouchPos(e)
        		//console.log('触发当前坐标点: startPos | '+ thisData.startPos)
        		thisData.startTranslateY = thisData.translateY
        		//console.log(thisData.startTranslateY);
        		thisData.dragging = true
        		//console.log(thisData.startTranslateY);
        		document.addEventListener('mousemove',this._onTouchMove,false)
        		document.addEventListener('mouseup',this._onTouchEnd,false) //松开鼠标
 				document.removeEventListener('touchmove', this._onTouchMove,false)
                document.removeEventListener('touchend', this._onTouchEnd,false)
        	
        	},
        	_onTouchMove(e){
        		let target = this.target
        		let thisData = this[target]
        		this.delta = this._getTouchPos(e) - thisData.startPos
        		thisData.translateY = thisData.startTranslateY + this.delta
 				if (Math.abs(this.delta) > 0) {
                    e.preventDefault()
                }
        		//
        	},
        	_onTouchEnd(e){
        		let target = this.target
        		let thisData = this[target]
        		thisData.dragging = false
        		this.setEndPage()
				document.removeEventListener('touchmove', this._onTouchMove)
                document.removeEventListener('touchend', this._onTouchEnd)
                document.removeEventListener('mousemove', this._onTouchMove)
                document.removeEventListener('mouseup', this._onTouchEnd)
        	},
        	setEndPage(){
				let target = this.target
        		let thisData = this[target]
        		let clientHeight = this.slideEls[0]['clientHeight']//每一个列表的高度
        		let size = thisData.data.length
        		let goPage = Math.round((thisData.translateY / clientHeight).toFixed(1)); //滑动到第几个列表位
        		if(goPage > 0){
        			goPage  = 0
        		}
        		goPage = size-1 >= Math.abs(goPage)? goPage: -(size - 1)
        		let index = Math.abs(goPage);
        		thisData.index = index;
        		thisData.translateY =  goPage * clientHeight
        		this.getSelectedDate(index);
        	},
        	getSelectedDate(index){
				let target = this.target
        		let thisData = this[target]
        		thisData.selectedId = thisData.data[index].code
        		this.inputValue = thisData.data[index].name
        	},
        	_getElem(e){
        	
				/*
				@param e.currentTarget : ul目标节点
				 */
		
        		return Array.from(e.currentTarget.children).slice(3,-3);
        		//返回新数组节点，去掉3个空的li标签。
        	},
        	_getTouchPos(e){
        		/*
        		@param e.changedTouches : 触发事件时改变的触摸点的集合
        		 */
        		//console.log(e)
        		return e.changedTouches? e.changedTouches[0]['pageY'] : e['pageY']
        	},
        	showBox(){
        		this.show = true;
        	},
        	submit(val){
        		this.show = false;
        		if(val){
        			this.result.id = this.items[this.listState.index].parentId;
        			this.result.name  = this.items[this.listState.index].name;
        			this.result.code  = this.items[this.listState.index].code;
        			this.$emit('input',this.inputValue);
        			console.log(this.inputValue);
        			console.log(this.value);
        			if(this.value!==this.inputValue){
        				  this.$emit('change', this.result)
        			}
        		}
        	},
			_stopDef (e) {
			     e.preventDefault()
			}
		},
        mounted(){
        	this.init();

        }

	}
</script>
<style lang="scss">
.ui-select-bg{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.7);
    z-index: 200;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.ui-select-header{
    background-color: #eee;
    height: 44px;
    line-height: 44px;overflow: hidden;
    text-align: center;
    font-size: 16px!important;
}
.ui-select-box{
    position: fixed;
    z-index: 300;
    background: #fff;
    bottom: 0;
    left: 0;
    right: 0;
}
.ui-select-cancel{
    float: left;padding: 0 20px;
    color: #1AAD19;
    font-size: 16px!important;
}

.ui-select-confirm{
    float: right;padding: 0 20px;
    color: #1AAD19;
    font-size: 16px!important;
}

.ui-select-content{
    width: 100%;
    margin: 0 auto;background: #fff;
    overflow: hidden;height: 245px;
    overflow: hidden;
}
.ui-select-list  {
	 width: 100%;
    text-align: center;
    ul {
    	-webkit-transition: all .3s ease;
	    transition: all .3s ease;
	    padding-left: 0 ;
	    margin: 0;
	    &{
	    	.dragging{
	    		-webkit-transition: none;transition: none;
	    	}
	    }
	    li {
	    	line-height: 35px;
		    height: 35px;
		    white-space: nowrap;
		    overflow: hidden;text-overflow: ellipsis;
		    font-size: 14px!important;
		    &.current{
		    		font-size: 16px!important;font-weight: bold;
		    }
		    	&.node1 {
		    		font-size: 15px!important;opacity: .7;
		    	}
		    	&.node2{
		    		font-size: 14px!important;opacity: .5;
		    	}
		    	&.node3 {
		    		font-size: 12px!important;opacity: .3;
		    	}
	    }
    }
}

.line-top,.line-bottom {
	    width: 100%;
    border: none;
    border-top: 1px solid #eee;
    position: absolute;
        margin: 0;
    height: 0;
}
.line-top {
	top: 149px;
}
.line-bottom {
	top: 184px;
}

.ui-select {
		input {
			   cursor: pointer;
		}
	 
}
.ui-select-shadow{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.7);
    z-index: 200;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.ui-select-disabled {
    background-color: #f3f3f3;
    cursor: not-allowed;
    color: #ccc
}
.fade-enter-active, .fade-leave-active {transition: opacity .35s}
.fade-enter, .fade-leave-active {opacity: 0}
.expand-select-enter-active, .expand-select-leave-active {transition: all .4s ease;bottom: 0px;}

.expand-select-enter, .expand-select-leave-active {transform: translate(0, 289px);}
</style>