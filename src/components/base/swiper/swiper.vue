<template>
	<div class="ui-swiper">
		<div class="ui-swiper-wrap"
		v-if="count > 1"
		:style="initStyle"
		@touchstart="onTouchStart"
		@touchmove="onTouchMove"
		@touchend="onTouchEnd"
		@mousedown="onTouchStart"
		@mousemove="onTouchMove"
		@mouseup="onTouchEnd"
		@transitionend="$emit('change', activeIndicator)"
		 >
			<slot></slot>
		</div>
		<div v-else class="ui-swiper-wrap">
      		<slot></slot>
    	</div>
		<div class="ui-swiper-indicators" v-if="showIndicators && count > 1">
			<span v-for="index in count" :class="{'active':index - 1 ===  activeIndicator }"></span>
		</div>
	</div>
</template>
<script>
	export default {
		name:'ui-swiper',
		props:{
			autoplay: Number,
			showIndicators:{
				type:Boolean,
				default:true
			},
			initActive:{
				type:Number,
				default:0
			},
			duration: {
		      type: Number,
		      default: 500
    		}
		},
		data(){
			return {
				width:0,
				offset:0,
				deltaX:0,
				startX:0,
				startY:0,
				active:0,
				flag:false,
				direction:'',
				swipers:[],
				currentDuration:0
			}
		},
		mounted(){
			this.init();
			for(let i in this.bg){
				this.$el.children[0].children[i].style['backgroundColor'] = this.bg[i];
			}
			
		},
		destroyed() {
   			 clearTimeout(this.timer);
  		},
		watch:{
			swipers(){
				this.init();
			},
			initActive(){
				this.init();
			}
		},
		computed:{
			count(){
				return this.swipers.length
			},
			initStyle(){
				return {
					paddingLeft:this.width + 'px',
					width:(this.count + 2) * this.width + 'px',
					transitionDuration:`${this.currentDuration}ms`,
					transform: `translate3d(${this.offset}px, 0, 0)`
				}
			},
			activeIndicator(){
				return (this.active + this.count) % this.count
			}
		},
		methods:{
			init(){
				clearTimeout(this.timer);
				this.width = this.$el.getBoundingClientRect().width;
				this.active = this.initActive;
				this.currentDuration = 0;
				this.offset = this.count > 1 ? -this.width * (this.active + 1) : 0
				this.autoPlay();
			},
			onTouchStart(event) {
				clearTimeout(this.timer);
				const eventX = event.clientX ? event.clientX : event.touches[0].clientX;
				const eventY = event.clientY ? event.clientY : event.touches[0].clientY;
				this.flag = true;
				this.deltaX = 0;
				this.direction = '';
				this.currentDuration = 0;
				this.startX = eventX;
				this.startY = eventY;
				//获取鼠标，或者触摸第一次的位置
				if(this.active <= -1) {
					//左滑到最后一面返回第一页
					this.movePage(this.count)
				}
				if(this.active >= this.count) {
					//右滑到最后一面返回第一页
					this.movePage(-this.count)
				}
			},
			onTouchMove(event){
				if(this.flag) {
					const eventX = event.clientX ? event.clientX : event.touches[0].clientX;
					this.direction = this.direction || this.getDirection(event);
					//判断是水平滑动，还是垂直滑动
					if(this.direction === 'horizontal') {
						//水平
						event.preventDefault();
						this.deltaX = eventX - this.startX;
						this.movePage(0,this.range(this.deltaX,[-this.width,this.width]));
					}
				}
			},
			onTouchEnd(){
				this.flag = false;
				if(this.deltaX) {
					this.currentDuration = this.duration;
					this.movePage(Math.abs(this.deltaX) > 50 ? (this.deltaX > 0 ? -1 : 1) : 0)
				}
				this.autoPlay()
				// console.log("active: " + this.active + "|deltaX: "+ this.deltaX + " | offset: "+this.offset + " | width: "+ (this.active + 1 * this.width)+"|direction: "+ this.direction);
			},
			movePage(moveNum = 0,offset = 0){
				const { active, count , swipers , deltaX , width } = this
				if(moveNum) {
					if(active === -1) {
						//当索引等于 回调时的第一张时
						//最后一张图回归位置
						swipers[count - 1].offset = 0
					}
					swipers[0].offset = active === count - 1 && moveNum > 0 ? count * width : 0
					//当索引等于 最后一张图时，
					//第一张图的位置是总长度的距离
					this.active += moveNum;
				}
				else {
					if(active === 0){
						//当索引等于第一张时
						//最后一张图的位置距离 等于 负总长度的距离
						swipers[count - 1].offset = deltaX > 0 ? -count * width : 0
					}
					else if (active === count - 1) {
						//等于最后一张时，第一张图的位置距离 等于 正总长度的距离
						swipers[0].offset = deltaX < 0 ? count * width : 0
					}
				}
				this.offset = offset - (this.active + 1) * this.width
			},
			getDirection(event) {
				const eventX = event.clientX ? event.clientX : event.touches[0].clientX
				const eventY = event.clientY ? event.clientY : event.touches[0].clientY
				const distanceX = Math.abs(eventX - this.startX);
				const distanceY = Math.abs(eventY - this.startY);
				return distanceX > distanceY ? 'horizontal': distanceX < distanceY ? 'vertical':''
			},
			range(num,arr){
				return Math.min(Math.max(num,arr[0]),arr[1])
			},
			autoPlay(){
				const {autoplay} = this
				if(autoplay && this.count > 1) {
					clearTimeout(this.timer);
					this.timer = setTimeout(()=>{
						this.currentDuration = 0
						if(this.active >= this.count) {
							this.movePage(-this.count);
						}
						setTimeout(()=>{
							this.currentDuration = this.duration;
							this.movePage(1);
							this.autoPlay();
						},30)
					},autoplay);
				}
			}
		}
	}
</script>
<style lang="scss">
	.ui-swiper {
		overflow: hidden;
		width: 375px;
		position:relative;
	}
	.ui-swiper-wrap {
		height: 100%;
    	overflow: hidden;
    	
	}
	.ui-swiper-indicators {
		left: 50%;
	    bottom: 10px;
	    position: absolute;
	    height: 6px;
	    -webkit-transform: translate3d(-50%, 0, 0);
	    transform: translate3d(-50%, 0, 0);
	    >span {
	    	 border-radius: 100%;
		    vertical-align: top;
		    display: inline-block;
		    background-color: #999;
		    width: 6px;
		    height: 6px;
		    &:not(:last-child) {
		    	margin-right: 6px;
		    }
	    }
	    .active {
	        background-color: #0089dc;
	    }
	}
</style>