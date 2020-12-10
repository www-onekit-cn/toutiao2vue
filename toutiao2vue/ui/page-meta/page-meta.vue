<template>
		<div
		:class="['onekit-page-meta',onekitClass]"
		:style="onekitStyle"
		:id="onekitId"
		>
		<slot></slot>
		</div>
</template>

<script>
import toutiao_behavior from "../../behaviors/toutiao_behavior"
import onekit_behavior from "../../behaviors/onekit_behavior"
export default{
    name: "onekit-page-meta",
    mixins:[toutiao_behavior, onekit_behavior],
	props:{
	
		
	},
	methods:{
		
	}
}
</script>

<style>
</style>
