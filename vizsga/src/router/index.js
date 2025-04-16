import login from '@/views/login.vue'
import main from '@/views/main.vue'
import other from '@/views/other.vue'
import reg from '@/views/reg.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: main,
    },
    {
      path: '/login',
      name: 'Login',
      component: login,
    },
    {
      path: '/reg',
      name: 'Reg',
      component: reg,
    },
    {
      path: '/other',
      name: 'Other',
      component: other,
    }
    
  ],
})

export default router