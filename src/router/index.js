import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import( /* webpackChunkName: "home" */ '../views/home/index.vue'),
	},
	{
		path: '/music',
		name: 'Music',
		component: () => import( '../views/music/index.vue'),
		children: [
			{
				// UserProfile will be rendered inside User's <router-view>
				// when /user/:id/profile is matched
				path: 'play',
				component: () => import( '../views/music/Play.vue'),
			},
			// {
			// 	// UserPosts will be rendered inside User's <router-view>
			// 	// when /user/:id/posts is matched
			// 	path: 'posts',
			// 	component: UserPosts,
			// },
		],
	},
	{
		path: '/scene',
		name: 'Scene',
		component: () => import( '../views/scene/index.vue'),
	},
	{
		path: '/about',
		name: 'About',
		component: () => import( '../views/about/index.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'Notfound',
		component: () => import( '../views/notfound.vue'),
	},
]


// "history":createWebHistory()
// "hash":createWebHashHistory()
// "abstract":createMemoryHistory()
const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router