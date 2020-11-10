import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Buttons, Tooltip, Toast } from 'bootstrap';

// Test import of styles
import './styles/index.scss'

createApp(App).use(router).use(store).mount('#app')