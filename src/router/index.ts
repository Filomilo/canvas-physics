import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/SpringSimulationTest.vue')
    },
    {
      path: '/SpringSimulationTest',
      name: 'v',
      component: () => import('@/views/SpringSimulationTest.vue')
    },


    
    {
      path: '/FloorTest',
      name: 'v',
      component: () => import('@/views/FloorTest.vue')
    },
    {
      path: '/SasVisualizerView',
      name: 'SasVisualizerView',
      component: () => import('@/views/SasVisualizerView.vue')
    },
    {
      path: '/ballsDemo',
      name: 'ballsDemo',
      component: () => import('@/views/PhysicDemoView.vue')
    },
    {
      path: '/ShapesDemo',
      name: 'shapesDemo',
      component: () => import('@/views/ShapesDemoView.vue')
    },
    {
      path: '/Home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
