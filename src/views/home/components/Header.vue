<template>
	<header class="navbar navbar-expand-md navbar-dark bd-navbar">
		<nav class="container-xxl flex-wrap flex-md-nowrap" aria-label="Main navigation">
			<Logo />
			<div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item">
						<router-link to="/music" active-class="active" class="nav-link">土尔音乐</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/scene" active-class="active" class="nav-link">土尔旅游</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/about" active-class="active" class="nav-link">关于我们</router-link>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/map.html" target="_blank" rel="noopener">网站地图</a>
					</li>
				</ul>
			</div>
			<ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
				<li class="nav-item dropdown">
					<a class="nav-item nav-link dropdown-toggle mr-md-2" href="#" id="bd-versions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						v1.0.1
					</a>
					<div class="dropdown-menu dropdown-menu-right" aria-labelledby="bd-versions">
						<a class="dropdown-item" href="tud.html">jQuery版 v1.0.1</a>
						<a class="dropdown-item active" href="index.html">VUE版 v1.0.1</a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item" href="###">所有版体</a>
					</div>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
import Logo from './Logo.vue'
import { reactive, computed } from 'vue'

export default {
	components: { Logo }
    // setup() {
    //     const state = reactive({
    //         isNavShow: false
    //     })
    //     const navClass = computed(() => state.isNavShow ? "collapse navbar-collapse show" : "collapse navbar-collapse")
    //     const changeIsNavShow = () => {
    //         state.isNavShow = !state.isNavShow;
    //     } 
        
    //     return { state, changeIsNavShow, navClass };
    // }
}
</script>