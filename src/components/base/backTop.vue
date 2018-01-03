<script>
export default {
	name:'backTop',
 	data: function () {
        return {
            currentValue:false,
            visibility: 0
        }
    },
 	watch: {
        currentValue (value) {
            this.visibility = (value === true ? 1 : 0)
        }
    },
    props:{
    	direction:{
    		type:Object,
    		default(){
    			return {
    				bottom:'10px',
    				right:'10px'
    			}
    		}
    	},
    	position:{
    		type:Number,
    		default:100
    	}
    },
    render (createElement) {
            return createElement('div', {
                style: [{position: 'fixed'}, this.direction, {opacity: this.visibility}],
                'class': 'go-top',
                on: {
                    click: this.goTop
                }
            },this.$slots.default)
    },
    mounted(){
    	this.$nextTick(() => {
            window.addEventListener('scroll',this.onScroll)
        })
    },
	methods:{
		goTop(){
			for(var i = window.scrollY;i > 0;i--){
				setTimeout(()=>{
					window.scroll(0,window.scrollY - 1)
				},i / 10) // 儅i超過1000時，不除以10就悲劇了
			}
		},
  		onScroll () {
            let scrollTop = window.scrollY
            scrollTop > this.position?  this.currentValue = true : this.currentValue = false
        }
	}
}
</script>
<style lang="scss">
@import "../../assets/sass/mixin";
@import "../../assets/icons/icons";
.scroll-top {
    position: fixed;
    bottom: 80px;
    right: 10px;
    @include px2px(width, 100px);
    @include px2px(height, 100px);
    border: 1px solid #d6d6d6;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
    .icon-arraw-up {
        display: block;
        @include px2px(margin-top, 8px);
    }
}
.space-box {
    padding-top:10px;
    height: 1000px;
}
</style>
	