import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/main/Home.vue'

//main组件页面部分
import mainIntro from '@/components/main/Intro'
import mainSelect from '@/components/main/Select'
import mainPicker from "@/components/main/Picker"
import mainCheckbox from '@/components/main/CheckBox'
import mainRadio from "@/components/main/Radio"
import mainControl from "@/components/main/Control"
import mainSwitch from "@/components/main/Switch"
import mainInput from "@/components/main/Input"
import mainModal from "@/components/main/Modal"
import mainHint from "@/components/main/Hint"
import mainBackTop from "@/components/main/BackTop"
import mainSwiper from "@/components/main/Swiper"
import mainRate from "@/components/main/Rate"
import mainButton from "@/components/main/Button"
import mainNoticeBar from "@/components/main/noticeBar"
import mainPagination from "@/components/main/Pagination"
import mainIcon from "@/components/main/Icon"
import mainProgressBar from "@/components/main/ProgressBar"
import mainNavBar from "@/components/main/NavBar"
//路由部分
import base from '@/components/relative/Base.vue'
import use from '@/components/relative/Use.vue'
Vue.use(Router)

export default new Router({
	mode: 'history',
	base: __dirname,
	routes: [{
		path: '/',
		component: Home
	}, {
		path: '/use',
		component: use,
		children: [{
			path: 'intro',
			component: mainIntro
		}]
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
			path: 'hint',
			component: mainHint
		}, {
			path: 'backTop',
			component: mainBackTop
		}, {
			path: 'swiper',
			component: mainSwiper
		}, {
			path: 'picker',
			component: mainPicker
		}, {
			path: 'rate',
			component: mainRate
		}, {
			path: 'button',
			component: mainButton
		}, {
			path: 'noticeBar',
			component: mainNoticeBar
		}, {
			path: 'pagination',
			component: mainPagination
		}, {
			path: 'icon',
			component: mainIcon
		}, {
			path: 'ProgressBar',
			component: mainProgressBar
		}, {
			path: 'NavBar',
			component: mainNavBar
		}]
	}]
})