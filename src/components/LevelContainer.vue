<template>
  <main class="FullPage">
    <div :id="`level_${props.level}`" class="FullPage">
      <GameComponent class="gameView" :id="`game_level_${props.level}`" :game="game" />
    </div>
    <!-- <div class="titleStyle">
            Level {{ props.level }}
        </div> -->
  </main>
</template>

<script setup lang="ts">
import Game from '@/Game/Game'
import PlayerBall from '@/Game/Objects/PlayerBall'
import { useLevelsAcces } from '@/States/useLevelsAcces'
import { useUiControlsMethod } from '@/States/useUiControlsMethod'
import GameComponent from '@/components/GameComponent.vue'
import { Vector2 } from 'three'

const levelAcces = useLevelsAcces()
const UiControlMethod = useUiControlsMethod()
const props = defineProps<{
  game: Game
  player: PlayerBall
  level: number
}>()
const originalPlayerPositon: Vector2 = props.player.position.clone()
props.game._SimulationController.isSimulationActive = false
props.player.addOnACtivateMethod(() => {
  console.log('LVL UP')
  props.game.soundController.playLvlUp()
  if (levelAcces.solvedLevles.value < props.level) {
    levelAcces.setNewMax(props.level)
  }
})

UiControlMethod.play.value = () => {
  console.log(`level ${props.level} activated simualtation`)
  props.game._SimulationController.isSimulationActive = true
}
UiControlMethod.restart.value = () => {
  props.player.position = originalPlayerPositon.clone()
  if (!props.game.hasObject(props.player)) {
    props.game.addObject(props.player)
  }
}
</script>

<style lang="css"></style>
