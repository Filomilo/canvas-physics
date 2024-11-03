// useLoading.ts
import { computed, ComputedRef, inject, Ref, ref } from 'vue'
import { useCookies } from 'vue3-cookies'
// const _solvedLevles: Ref<number> = ref(0)
const { cookies } = useCookies()
const changeWatcher = ref(0)

const solvedLevles: ComputedRef<number> = computed(() => {
  changeWatcher.value = changeWatcher.value
  const lvls = cookies!.get('levels')
  return lvls ? parseInt(lvls) : 0
})

const setNewMax = (lvl: number) => {
  cookies.set('levels', lvl.toString())
  changeWatcher.value = lvl
  // _solvedLevles.value = lvl
}

const maxLevels = 4

export function useLevelsAcces() {
  return { solvedLevles, maxLevels, setNewMax }
}
