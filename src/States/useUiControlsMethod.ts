// useLoading.ts
import { ref } from 'vue'

let play = ref(() => {
  console.log('Default play')
})
let restart = ref(() => {
  console.log('Default restart')
})
let refresh = ref(() => {
  console.log('Default Refresh')
  window.location.reload()
})
export function useUiControlsMethod() {
  return { play, restart, refresh }
}
