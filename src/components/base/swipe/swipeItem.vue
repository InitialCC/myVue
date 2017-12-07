<template>
	<div class="swipe-item">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name:'swip-item',
		mounted(){
					console.log(this.$parent);
			
			this.$parent && this.$parent.swipeItemCreated(this)
		}
	}
</script>