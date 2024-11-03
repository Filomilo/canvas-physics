import { createRouter, createWebHistory } from 'vue-router'
import { useLoading } from '@/States/useLoading'
import { useLevelsAcces } from '@/States/useLevelsAcces'
const { loadingVisible } = useLoading()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/Levels/1'
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
    },
    {
      path: '/MovableSpringTest',
      name: 'MovableSpringTest',
      component: () => import('@/views/MovableSpringTest.vue')
    },
    {
      path: '/FanTest',
      name: 'FanTest',
      component: () => import('@/views/FanTest.vue')
    },
    {
      path: '/ParticleTest',
      name: 'ParticleTest',
      component: () => import('@/views/ParticleSimulationView.vue')
    },
    {
      path: '/WinActivationTest',
      name: 'WinActivationTest',
      component: () => import('@/views/WinActivationTest.vue')
    },
    {
      path: '/Levels/1',
      name: 'Level1',
      component: () => import('@/views/Levels/Level1.vue'),
      beforeEnter: (to, from) => {
        const levelAcces = useLevelsAcces()
        const acces: number = levelAcces.solvedLevles.value
        if (acces < 1 - 1) return false
      }
    },
    {
      path: '/Levels/2',
      name: 'Level2',
      component: () => import('@/views/Levels/Level2.vue'),
      beforeEnter: (to, from) => {
        const levelAcces = useLevelsAcces()
        const acces: number = levelAcces.solvedLevles.value
        if (acces < 2 - 1) return false
      }
    },
    {
      path: '/Levels/3',
      name: 'Level3',
      component: () => import('@/views/Levels/Level3.vue'),
      beforeEnter: (to, from) => {
        const levelAcces = useLevelsAcces()
        const acces: number = levelAcces.solvedLevles.value
        if (acces < 3 - 1) return false
      }
    },
    {
      path: '/Levels/4',
      name: 'Level4',
      component: () => import('@/views/Levels/Level4.vue'),
      beforeEnter: (to, from) => {
        const levelAcces = useLevelsAcces()
        const acces: number = levelAcces.solvedLevles.value
        if (acces < 4 - 1) return false
      }
    }
  ]
})

router.beforeEach(() => {
  loadingVisible.value = true
})

router.afterEach(() => {
  loadingVisible.value = false
})
export default router
