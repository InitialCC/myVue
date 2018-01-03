<template>
	<div class="ui-noticeBar">
		<div class="ui-noticeBar-wrap" ref="contentWrap">
			<div class="ui-noticeBar-content"
				:style="contentStyle"
				:class="animationClass"
				@animationend="onAnimationEnd"
	        	@webkitAnimationEnd="onAnimationEnd">
				<slot>{{ text }}</slot>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name:'ui-noticeBar',
		props:{
			text:{
				type:String
			},
			delay: {
      			type: [String, Number],
      			default: 1
    		},
    		scrollable: {
		      type: Boolean,
		      default: true
    		},
    		speed: {
		      type: Number,
		      default: 50
   			}
		},
		data(){
			return {
				 wrapWidth: 0,
				 offsetWidth:0,
				 firstRound: true,
				 duration:0,
				 animationClass:''
			}
		},
		computed:{
			contentStyle(){
				return {
					paddingLeft:this.firstRound ? 0 : this.wrapWidth + 'px',
					animationDelay:(this.firstRound ? this.delay : 0) + 's',
					animationDuration:this.duration + 's'
				}
			}
		},
		mounted(){
			const wrapWidth = this.$refs.contentWrap.getBoundingClientRect().width
			const offsetWidth  = this.$refs.contentWrap.children[0].getBoundingClientRect().width
			console.log(offsetWidth+"offset")
			console.log(wrapWidth+"wrap");
			if(this.scrollable && offsetWidth > wrapWidth) {
				this.wrapWidth = wrapWidth
				this.offsetWidth = offsetWidth
				this.duration = offsetWidth / this.speed
				this.animationClass = "ui-noticeBar-play"
			}
		},
		methods:{
			onAnimationEnd(){
				this.firstRound = false;
				console.log(this.duration);
				this.$nextTick(()=>{
					this.duration = (this.offsetWidth + this.wrapWidth) / this.speed
					this.animationClass = "ui-noticeBar-infinite"
				})
			}
		}
	}
</script>
<style lang="scss">
@import "../../assets/sass/mixin.scss";
.ui-noticeBar {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    width: 400px;
    color: #f60;
    padding: 9px 10px;
    font-size: 12px;
    line-height: 1.5;
    position: relative;
    background-color: #fff7cc;
}
.ui-noticeBar-wrap {
   -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    height: 18px;
    overflow: hidden;
    position: relative;
}
.ui-noticeBar-content {
    position: absolute;
    white-space: nowrap;
}
.ui-noticeBar-play {
    -webkit-animation: ui-noticeBar-play  linear both;
            animation: ui-noticeBar-play  linear both;
}
.ui-noticeBar-infinite {
	@include animation(ui-noticeBar-play-infinite linear infinite both);
}



@keyframes ui-noticeBar-play {
  to { -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0) }
}
@-webkit-keyframes ui-noticeBar-play {
  to { -webkit-transform: translate3d(-100%, 0, 0);transform: translate3d(-100%, 0, 0) }
}


@keyframes ui-noticeBar-play-infinite {
  to { -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0) }
}
@-webkit-keyframes ui-noticeBar-play-infinite {
  to { -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0) }
}


 
	
</style>