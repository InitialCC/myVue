<template>
	<div class="swipe">
		<div class="swipe-wrap" ref="wrap">
			<slot></slot>
		</div>
		<div class="swipe-indicators">
			<div class="swipe-indicator">
				
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name:'swipe',
		data(){
			return {
				ready:false,
				index:0,
				pages:[],
				renTimer:null,
				speed:300,
				state:{}
			}
		},
		props:{
			defaultIndex: {
	        type: Number,
	        default: 0
     		}
		},
		mounted(){
			this.ready = true;
			this.initPages();
			var ele = this.$el;
			//mobile
			ele.addEventListener('touchstart', this.StartEvent);
		    ele.addEventListener('touchmove', this.MoveEvent);
		    ele.addEventListener('touchend', this.EndEvent);
			//pc
			ele.addEventListener('mousedown',this.StartEvent);
			ele.addEventListener('mousemove',this.MoveEvent);
			ele.addEventListener('mouseup',this.EndEvent);
			//this.onTouchEnd(event);
		},
		methods:{
			swipeItemCreated(){
				/*if (!this.ready) return;
				clearTimeout(this.renTimer);
				this.renTimer = setTimeout(()=>{
					this.initPages();
					console.log(2);
				},100)*/
			},
			initPages(){
				let children = this.$children;
				let pages = [];
				this.index = this.defaultIndex
				children.forEach((child,index)=>{
					pages.push(child.$el);
					child.$el.className = '';
					if(index == this.defaultIndex) {
						child.$el.className = 'is-active'
					}
				});
				this.pages = pages;
			

			},
			onTouchEnd(){
				let towards = null;
				let index = this.index;

				this.doAnimate(towards,{
					offsetLeft:offsetLeft
				});
			},
			doAnimate(towards,ops){
				if(this.$children.length===0) {
					return
				}
				let pageWidth,offsetLeft,currentPage,prevPage, nextPage
				let speed = this.speed || 300
				let index = this.index
				let pages = this.pages
				let size = pages.length
				if(!ops){
					ops = options || {};
					pageWidth = this.$el.clientWidth
					currentPage = pages[index]
					if(towards==='goto'){

					}
					else {
						prevPage = pages[index - 1]
						nextPage = pages[index + 1]
					}
				}
				else {
					pageWidth = ops.prevPage
					offsetLeft = ops.offsetLeft
					currentPage = ops.currentPage
					nextPage = ops.nextPage
					prevPage = ops.prevPage
				}

				console.log(this.$children.length)
			}
		}
	}
</script>
<style>
	.swipe {
    overflow: hidden;
    position: relative;
    height: 100%;
  }
  .swipe-wrap {
    position: relative;
    overflow: hidden;
    height: 100%;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
  }
  .swipe-wrap > div {
    position: absolute;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    width: 100%;
    height: 100%;
    display: none
  }
  .swipe-wrap > div.is-active {
    display: block;
    -webkit-transform: none;
    transform: none;
  }
  .swipe-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .swipe-indicator {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: 0.2;
    margin: 0 3px;
  }
  .swipe-indicator.is-active {
    background: #fff;
  }
</style>