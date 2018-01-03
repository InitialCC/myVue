<template>
	<ul class="ui-pagination">
		<li class="item prev" :class="{'page-disabled':value === 1}" @click="selectPage(value - 1)">
			{{ prevText }}
		</li>
		<li class="item page"
			v-if="isMultiMode"
			v-for="(page,index) in pages"
			:class="{'active':page.active}"
			:key="index"
 			@click="selectPage(page.number
 			)"
			>
			{{ page.text }}
		</li>
		<li v-if="!isMultiMode" class="page-desc">
			<slot name="pageDesc">{{ pageDesc }}</slot>
		</li>
		<li class="item next" :class="{'page-disabled':value === maxPageCount }" @click="selectPage(value + 1)">
			{{ nextText }}
		</li>
	</ul>
</template>
<script>
	export default {
		name:"ui-pagination",
		props:{
			pageCount: Number,
			value: Number,
			ellipsis:Boolean,
			prevText:{
				type:String,
				default:'上一页'
			},
			nextText:{
				type:String,
				default:'下一页'
			},
			itemsPage:{
				type:Number,
				default:10
			},
			showPageSize:{
				type:Number,
				default:5
			},
			totalItems:{
				type: Number,
      			default: 0
			},
			mode:{
				type:String,
				default:'mutil'
			}
		},
		computed:{
			isMultiMode(){
				return this.mode === 'mutil'
			},
			pageDesc(){
				return this.value + "/" + this.maxPageCount
			},
			maxPageCount(){
				const count = this.pageCount || Math.ceil(this.totalItems / this.itemsPage)
				return Math.max(1,count)
			},
			pages(){
				const pages = []
				const pageCount = this.maxPageCount
				let startPage = 1
				let endPage = pageCount;
				const isMaxSized = this.showPageSize !==  undefined && this.showPageSize < pageCount
				if(isMaxSized) {
					startPage = Math.max(this.value - Math.floor(this.showPageSize / 2),1)
					endPage = startPage + this.showPageSize - 1
					if(endPage > pageCount) {
						  endPage = pageCount;
						  startPage = endPage - this.showPageSize + 1
					}
					console.log("value: " + this.value +" | showPageSize: "+ this.showPageSize + " | startPage: " + startPage + " | endPage: " + endPage + " | pageCount: " + pageCount);
				}
				
			
				for(let number = startPage;number <= endPage;number++){
					const page = this.makePage(number,number,number === this.value)
					pages.push(page);
				}

				if(isMaxSized && this.showPageSize > 0 && this.ellipsis){
					
					if(startPage > 1) {
						const prevSet = this.makePage(startPage - 1,'...',false)
						console.log('prevSet')
						console.log(prevSet)
						console.log('prevSet')
						pages.unshift(prevSet)
					}

					if(endPage < pageCount) {
						const nextSet = this.makePage(endPage + 1,'...',false)
						pages.push(nextSet);
						console.log('nextSet')
						console.log(nextSet)
						console.log('nextSet')
					}
				}

				return pages
			}
		},
		created(){
			this.selectPage(this.value)
		},
		methods:{
			makePage(number,text,active){
				return {number,text,active}
			},
			selectPage(page){
				page = Math.max(1,page)
				page = Math.min(this.maxPageCount, page);
				if(this.value!== page) {
					this.$emit('input',page)
					this.$emit('change',page)
				}
			}
		},
		

	}
</script>
<style lang="scss">
	.ui-pagination {
		width: 330px;
		display: -webkit-box;
	    display: -webkit-flex;
	    display: flex;
	    text-align: center;
	    line-height: 40px;
	    font-size: 14px;
	     background-color: #f8f8f8;
	      border: 1px solid #e2e2e2;;
		.item {
			position:relative;
			-webkit-box-flex: 1;
		    -webkit-flex: 1;
		    flex: 1;
		    height: 40px;
		    min-width: 36px;
		    color: #38f;
		    background-color: #fff;
		    box-sizing: border-box;
		    -webkit-user-select: none;
		    user-select: none;
 			border-left: 1px solid #e2e2e2;
 			border-right: 1px solid #e2e2e2;
 			cursor: pointer;
		}
		.page {
			-webkit-box-flex: 0;
    		-webkit-flex-grow: 0;
    		flex-grow: 0;
    		&.active {
    			background-color: #38f;
    			color: #fff;
    		}
		}
		.page-disabled {
			background-color: #f8f8f8;
    		color: #666;
    		opacity: 0.6;
		}
	}
	.page-desc {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
	}
</style>