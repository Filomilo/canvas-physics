import { createRouter, createWebHistory } from 'vue-router'

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
      name: 'SpringSimulationTest',
      component: () => import('@/views/SpringSimulationTest.vue')
    },
    {
      path: '/PhysicDemoView',
      name: 'PhysicDemoView',
      component: () => import('@/views/PhysicDemoView.vue')
    },

    
    {
      path: '/FloorTest',
      name: 'FloorTest',
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
      path: '/ShapesDemoView',
      name: 'ShapesDemoView',
      component: () => import('@/views/ShapesDemoView.vue')
    }
  ]
})

export default router
