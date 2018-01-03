<template>
	<div class="main-button">
		<h2>Button 按钮</h2>
		<div class="box">
			<p>	基础的按钮用法。</p>
			<ui-button type="default">默认按钮</ui-button>
			<ui-button type="primary">主要按钮</ui-button>
			<ui-button type="success">成功按钮</ui-button>
			<ui-button type="info">信息按钮</ui-button>
			<ui-button type="warning">警告按钮</ui-button>
			<ui-button type="danger">危险按钮</ui-button>
		</div>
		<div class="box">
			<p>空的状态</p>
			<ui-button type="default"  hollow>默认按钮</ui-button>
			<ui-button type="primary"  hollow>主要按钮</ui-button>
			<ui-button type="success"  hollow>成功按钮</ui-button>
			<ui-button type="info"  hollow>信息按钮</ui-button>
			<ui-button type="warning"  hollow>警告按钮</ui-button>
			<ui-button type="danger"  hollow>危险按钮</ui-button>
		</div>
		<div class="box">
		<p>带radius</p>
			<ui-button type="default" round>默认按钮</ui-button>
			<ui-button type="primary"  round>主要按钮</ui-button>
			<ui-button type="success"  round>成功按钮</ui-button>
			<ui-button type="info" round>信息按钮</ui-button>
			<ui-button type="warning"  round>警告按钮</ui-button>
			<ui-button type="danger" round>危险按钮</ui-button>
		</div>
		<div class="box">
			<p>按钮尺寸</p>
			<ui-button type="success"  size="small">small</ui-button>
			<ui-button type="primary"  size="normal">normal</ui-button>
			<ui-button type="warning" size="large">large</ui-button>
		</div>
		<codeBlock :code="codeButton"></codeBlock>
		</div>
</template>
<script>
import codeButton from "!raw-loader!../base/button"
import codeBlock from"@/components/common/CodeBlock"
import uiButton from "@/components/base/button"

	export default {
		name:'main-button',
		components:{
			uiButton,
			codeBlock
		},
		data(){
			return {
				codeButton
			}
		}
	}
</script>