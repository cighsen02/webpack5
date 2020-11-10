<template>
	<main class="container">
	  <div class="bg-light p-5 rounded mt-3">
	    <h1>Bottom Navbar example</h1>
	    <p class="lead">{{ $route.params.id }} This example is a quick exercise to illustrate how the bottom navbar works.</p>
	    <a href="#" role="button" class="btn btn-success" @click="click">Clicked {{ count }} times.</a>
	  </div>
	</main>
</template>

<script>
import { ref } from 'vue'

export default {
	setup() {
		const count = ref(0)
		const click = () => {
			count.value++
		}
		return {
			count,
			click
		}
	}
}
</script>

<style>
	
</style>
