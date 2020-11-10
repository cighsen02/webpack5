<template>
	<div>丢失路径:{{fullPath}}</div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
	setup() {
		const route = useRoute()
		const fullPath  = route.fullPath
		return { fullPath }
	}
}
</script>

<style>
</style>
