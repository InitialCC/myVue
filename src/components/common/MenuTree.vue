<template>
	<li class="m-item" >
		<div class="title" @click="toggle(items.name)">
				<router-link exact :to="toRouter">{{items.name}}</router-link>
		</div>
	<transition name="nav-move">
		<ul v-if="isTree" class="treeUl" v-show="open">
			<menu-tree class="m-item-sub" v-for="(items,index) in items.children" :items="items" :key="items.children" @click.native="toActive(index)" :class="{'active':active }">
			</menu-tree>
		</ul>
	</transition>
	</li>
</template>
<script>
	export default {
		name:'menu-tree',
		props:{
			items:Object
		},
		 data () {
            return {
                open: true,
                active:false
            }
        },
		methods:{
			toggle(title){
				if(this.isTree) {
					this.open = !this.open;
				}
			},
			toActive(index) {
				this.active = true;
			}
		},
		computed:{
			isTree(){
				return this.items.children && this.items.children.length;
			},
			toRouter(){
				//let size = items.name.lenght;
			
				if(this.items.children && this.items.children.length) {
					return '';
				}
				else {
					return this.items.router;
				}
			}
		}
	}
</script>
<style lang="scss">
@import "../../assets/sass/mixin.scss";
//v-enter: 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。
//v-enter-active: 定义进入过渡的结束状态。在元素被插入时生效，在transition/animation 完成之后移除。
//v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。
//v-leave-active: 定义离开过渡的结束状态。在离开过渡被触发时生效，在transition/animation 完成之后移
.m-item {
    color: #fff;
    position: relative;
    >.title {
    	border-top:1px solid #3c3636;
    	border-bottom:1px solid #3c3636;
		>a{
        padding: 20px 25px;
        display: block;
        background-color: #4d5158;
        color: #fff;
		&.router-link-active {
    	    background-color: #52565d;
		    -webkit-transition: all 300ms ease;
		    transition: all 300ms ease;
    		}
    	}
    }
}


.m-item-sub {
    >.title>a {
        background-color: #3c3636;
        padding-left: 30px;
    }
}

.treeUl {
 @include transition(all .8s ease);
}

.useUl {
	a {
		  &:hover {
            background-color: #52565d;
            @include transition(all 300ms ease);
           
        }
	}

    .nav-move-enter-active, .nav-move-leave-active {
            @include transition(all 300ms ease);
    	bottom: 0px;
    }
    .nav-move-enter, .nav-move-leave-active {
        @include transition(all 300ms ease);
 		transform: translate(0, -59px);
        opacity: 0;
    }

}



</style>