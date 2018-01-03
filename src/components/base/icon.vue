<template>
	<i :class='"icon-"+name'></i>
</template>
<script>
	export default {
		name:'ui-icon',
		props:{
			name:''
		}
	}
</script>
<style lang="scss">
    @import "../../assets/icons/icons";
</style>