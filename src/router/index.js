import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
import RepositoryPage from '../components/RepositoryPage.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/repository/:username/:repoName',
      name: 'repository',
      component: () => import('../components/RepositoryPage.vue')
    }
  ]
})

export default router
