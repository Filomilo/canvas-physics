<template>
  <main class="DemoView">
    <div class="titleStyle">Win Activation Test</div>
    <GameComponent class="gameView" id="shapes_demo" :game="game" />
  </main>
</template>

<script lang="ts" setup>
import AirDrag from '@/Game/Affectors/AirDrag'
import Gravity from '@/Game/Affectors/Gravity'
import Game from '@/Game/Game'
import OnMousePartileEmitter from '@/Game/Objects/Particles/Emitters/OnMousePartileEmitter'
import ParticleSolver from '@/Game/Objects/Particles/ParticleSolver'
import PhysicBall from '@/Game/Objects/PhysicBall'
import CollidableSpring from '@/Game/Objects/SpringSimulation/CollidableSpring'
import SpingNode from '@/Game/Objects/SpringSimulation/SpingNode'
import Spring from '@/Game/Objects/SpringSimulation/Spring'
import GameComponent from '@/components/GameComponent.vue'
import { Vector2 } from 'three'
import SasVisualizerView from './SasVisualizerView.vue'
import WinBox from '@/Game/Objects/WinBox'
import PlayerBall from '@/Game/Objects/PlayerBall'
import SoundController from '@/Game/Controllers/SoundController'
const startPosition: Vector2 = new Vector2(100, 700)
const endPosition: Vector2 = new Vector2(500, 500)
const numberOFSegments = 10
const moveVec: Vector2 = endPosition.clone().sub(startPosition).divideScalar(numberOFSegments)

const game: Game = new Game()
const node1: SpingNode = new SpingNode(startPosition)
node1.IsSimulatable = false

game.addObject(new Gravity())
// game.addObject(new AirDrag(1.58))
const ball: PlayerBall = new PlayerBall(new Vector2(200, 30))
const soundController: SoundController = new SoundController()
ball.addOnACtivateMethod(() => {
  console.log('LVL UP')
  soundController.playLvlUp()
})
game.addObject(new WinBox(new Vector2(200, 150)))
game.addObject(ball)
</script>
