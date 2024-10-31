// useLoading.ts
import { ref } from 'vue'

const loadingVisible = ref(false)

export function useLoading() {
  return { loadingVisible }
}
