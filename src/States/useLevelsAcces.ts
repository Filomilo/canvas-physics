// useLoading.ts
import { computed, ComputedRef, Ref, ref } from 'vue'

const _solvedLevles: Ref<number> = ref(55)
const solvedLevles: ComputedRef<number> = computed(() => {
  return _solvedLevles.value
})

const maxLevels = 4

export function useLevelsAcces() {
  return { solvedLevles, maxLevels }
}
