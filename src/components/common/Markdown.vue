<template>
  <div class="markdown-body" v-html="marked(text)"></div>
</template>
<script>
	import marked from 'marked'
	import hljs from 'highlight.js'
	export default {
		props:{
			text:{
				type:String,
				default:''
			}
		},
		created(){
			marked.setOptions({
				gfm: true,
				tables: true,
				breaks: false,
				pedantic: false,
				sanitize: true,
				smartLists: true,
				smartypants: false,
				highlight:(code) => hljs.highlightAuto(code).value
			})
		},
		methods:{
			marked(text){
				return marked(text)
			}

		}
	}
</script>
<style lang="scss">
   @import "../../assets/github-markdown.css";
    @import "../../assets/atom-one-light.css";
    .markdown-body pre {
    	background: #fff;
    }
</style>