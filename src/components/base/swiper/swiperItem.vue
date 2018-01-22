<template>
	<div class="ui-swiper-item" :style="style">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name:'ui-swiper-item',
		props:{
			index:{
				type:Number
			}
		},
		data(){
			return {
				  offset: 0
			}
		},
		computed:{
			style(){
				return {
					width:this.$parent.width + 'px',
					transform: `translate3d(${this.offset}px, 0, 0)`
				}
			}
		},
		beforeCreate(){
			this.$parent.swipers.push(this)
		},
		destroyed() {
   		 	this.$parent.swipers.splice(this.$parent.swipers.indexOf(this), 1);
  		}
	}
</script>
<style lang="scss">
.ui-swiper-item {
    color: #fff;
    min-height: 140px;
    font-size: 20px;
    text-align: center;
    line-height: 150px;
    float: left;
    height: 100%;
    &:nth-child(2n) {
     background-color: #39a9ed
    }
    &:nth-child(odd) {
    	 background-color: #66c6f2
    }
}
	

</style>