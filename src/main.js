

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { Button, message } from 'ant-design-vue';
import router from './router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/scss/bootstrap.scss';  

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button)

app.mount('#app')
