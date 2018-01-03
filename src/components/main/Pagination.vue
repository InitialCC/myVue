<template>
	<div class="main-Pagination">
			<h2>Pagination 分页</h2>
			<div class="box">
				<h3>基础用法</h3>
				<ui-pagination v-model="currentPage" :itemsPage="5" :totalItems="24"></ui-pagination>
			</div>

			<div class="box">
				<h3>简单模式</h3>
				<ui-pagination v-model="currentPage2" :pageCount="12" mode="simple"></ui-pagination>
			</div>
			<div class="box">
				<h3>显示省略号</h3>
				<ui-pagination v-model="currentPage3"  :pageCount="13" :showPageSize="3" :ellipsis="true" @change="change"></ui-pagination>
			</div>
	</div>
</template>
<script>
import uiPagination from "@/components/base/pagination"
	export default {
		name:'main-pagination',
		components:{
			uiPagination
		},
		data(){
			return {
				currentPage:1,
				currentPage2:1,
				currentPage3:1
			}
		},
		methods:{
			change(page){
				//console.log(page);
			}
		}

	}
</script>