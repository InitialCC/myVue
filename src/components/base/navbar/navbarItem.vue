<template>
	<a class="ui-navbar-item" :class="{'active': isSelect}"  @click="onClcik" >
		<i v-if="icon" :class='"icon-"+ icon '></i>
		<div>{{title}}</div>
		<span class="info" v-if="info">
			{{info}}
		</span>
	</a>

</template>
<script>
	export default {
		name:'ui-navbar-item',
		props:{
			title:{
				type:String
			},
			info:{
				type:Number
			},
			initActive:{
				type:Number,
				default:0
			},
			icon:{
				type:String
			}
		},
		computed:{
			isSelect(){
				//console.log( this.$parent.activeKey);
				return this.$parent.navbars.indexOf(this) === this.$parent.activeKey
			}
		},
		methods:{
			onClcik(){
				this.$emit('click', this.$parent.navbars.indexOf(this));
				this.$emit('tab-click', 1);
			},
			
		},
		beforeCreate(){
			this.$parent.navbars.push(this)
		}
	}
</script>
<style lang="scss">
	.ui-navbar-item {
		    text-align: center;
		display: inline-block;
		position:relative;
	    overflow: hidden;
	    font-size: 14px;
	    line-height: 1.4;
	    -webkit-user-select: none;
	    user-select: none;
	    color: #666;
	    word-break: break-all;
	    box-sizing: border-box;
	    padding: 20px 12px 20px 9px;
	    background-color: #f8f8f8;
	    border-bottom: 3px solid transparent;
	    &.active {
	    	background-color:#fff;
	    	border-color: #f44;
	    }
	}
	.info {
		position: absolute;
		top: 2px;
		right: 2px;
		font-size: 10px;
		color: #fff;
		-webkit-transform: scale(0.8);
		transform: scale(0.8);
		text-align: center;
		box-sizing: border-box;
		padding: 0 6px;
		min-width: 18px;
		line-height: 18px;
		border-radius: 9px;
    	background-color: #f44;
	}
</style>