import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/main/Home.vue'

//main组件页面部分
import mainSelect from '@/components/main/Select'
import mainPicker from "@/components/main/Picker"
import mainCheckbox from '@/components/main/CheckBox'
import mainRadio from "@/components/main/Radio"
import mainControl from "@/components/main/Control"
import mainSwitch from "@/components/main/Switch"
import mainInput from "@/components/main/Input"
import mainModal from "@/components/main/Modal"
import mainBackTop from "@/components/main/BackTop"
import mainSlider from "@/components/main/Slider"
import mainRate from "@/components/main/Rate"

//路由部分
import base from '@/components/relative/Base.vue'
Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'home',
		component: Home
	}, {
		path: '/base',
		component: base,
		children: [{
				path: 'select',
				component: mainSelect
			}, {
				path: 'checkbox',
				component: mainCheckbox
			}, {
				path: 'radio',
				component: mainRadio
			}, {
				path: 'control',
				component: mainControl
			}, {
				path: 'switch',
				component: mainSwitch
			}, {
				path: 'input',
				component: mainInput
			}, {
				path: 'modal',
				component: mainModal
			}, {
				path: 'backTop',
				component: mainBackTop
			}, {
				path: 'slider',
				component: mainSlider
			}, {
				path: 'picker',
				component: mainPicker
			}, {
				path: 'rate',
				component: mainRate
			}

		]
	}]
})