<template>
	<div class="ui-rate" v-if="length > 0">
		<svg style="position: absolute; width: 0; height: 0;" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	      <defs>
	        <symbol id="icon-star-empty" viewBox="0 0 32 32">
	          <title>star-empty</title>
	          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>
	        </symbol>
	        <symbol id="icon-star-full" viewBox="0 0 32 32">
	          <title>star-full</title>
	          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
	        </symbol>
	      </defs>
    	</svg>
    	<input type="hidden" :name="name" :value="rate" v-model="rate" >
	    	<button type="button"
			v-for="n in length"
	    	:key="n"
	    	:class="{
		    	'rate-star':true,
		    	'filled': n <= rate,
		    	'hover':n <= over,
		    	'disabled':disabled
	    	}"
	    	@mouseover="onOver(n)"
	    	@mouseout="onOut(n)"
	    	@click="setRate(n)"
	    	:disabled="disabled">
	    		<svg class="icon" v-show="isFilled(n)">
	                <use xlink:href="#icon-star-full"></use>
	            </svg>
	    		<svg class="icon" v-show="isEmpty(n)">
	          		<use xlink:href="#icon-star-empty"></use>
	        	</svg>
	    	</button>
		<div class="rate-view">
			<span class="count" v-if="showcount">{{over}}</span>
    		<span class="desc"  v-if="rateDesc.length > 0">{{rateDesc[over-1]}}</span>
    	</div>
	</div>
</template>
<script>
	export default {
	name: 'ui-rate',
	props: {
		name: {
			type: String,
			default: 'rate'
		},
		length: {
			type: Number
		},
		value: {
			type: [Number, String]
		},
		readonly: {
			type: Boolean,
			default: false
		},
		rateDesc: {
			type: Array,
			default () {
				return []
			}
		},
		showcount: {
			tpye: Boolean,
			default: false
		},
		disabled: {
			tpye: Boolean,
			default: false
		}
	},
	data() {
		return {
			rate: 0,
			over: 0
		}
	},
	methods: {
		setRate(index) {
			if (this.readonly) {
				return false
			}
			this.$emit('beforeRate', this.rate)
			this.rate = index
			this.$emit('input', this.rate)
			this.$emit('afterRate', this.rate)
		},
		isEmpty(index) {
			return index > this.over || !this.value && !this.over
		},
		isFilled(index) {
			return index <= this.over
		},
		onOver(index) {
			if (!this.readonly) {
				this.over = index
			}
		},
		onOut() {
			if (!this.readonly) {
				this.over = this.rate
			}
		}
	},
	created() {
		if (this.value >= this.length) {
			this.value = this.length
		} else if (this.value < 0) {
			this.value = 0;
		}
		this.rate = this.value
		this.over = this.value
	}
}
</script>
<style lang="scss">
.ui-rate {
    display: inline-block;
}

.rate-star {
	color: #b5b5b5;
    display: inline-block;
    padding: 7px;
    text-decoration: none;
    cursor: pointer;
    background: transparent none;
    border: 0;

    .icon {
		top: 0;
		vertical-align: middle;
    }

    &.disabled {
        cursor: not-allowed;
    }

    &.hover {
    	color: #efc20f;
    }

    &.filled {
    	color: #efc20f;
    }

    &:hover,&:focus {
    	text-decoration: none;
    }
}

.icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
    vertical-align: middle;
    top: -2px;
    position: relative;
    margin: 0 5px;
}

.rate-view {
	text-align: center;
    .count, .desc {
        display: block;
        vertical-align: middle;
        padding: 7px
    }
}

.rate-d {
    cursor: default;
}

.ui-rate.has-error .rate-star {
    color: #f37a77;
}

.ui-rate.has-error .ui-rate-star.hover {
    color: #efc20f;
}

.ui-rate.has-error .ui-rate-star.filled {
    color: #efc20f;
}

.ui-rate-star[disabled] {
    color: #CCC;
    opacity: 0.8;
}

.ui-rate-view.disabled .count, .ui-rate-view.disabled .desc {
    color: #CCC;
}

</style>