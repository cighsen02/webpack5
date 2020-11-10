<template>
	<Header />
	<div class="container-xxl my-md-4 bd-layout">
		<aside class="bd-sidebar">
			<router-view />
		</aside>
		
		<main class="bd-main order-1">
			<div>Counter: {{ counter }}</div>
			<button @click="click" class="btn btn-success">加油</button>
		</main>
	</div>
	<Footer />
</template>

<script>
import Header from '../home/components/Header.vue'
import Footer from '../home/components/Footer.vue'
import { ref } from 'vue'

export default {
	components: { Header, Footer },
	setup() {
		const counter = ref(0)
		const click = () => {
			counter.value++
		}
		return {
			counter,
			click
		}
	}
}
</script>

<style>
</style>
