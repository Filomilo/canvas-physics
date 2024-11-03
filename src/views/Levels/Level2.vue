<template>
  <div class="FullPage">
    <LevelContainer :game="game" :player="ball" :level="2" />
  </div>
</template>

<script setup lang="ts">
import Gravity from '@/Game/Affectors/Gravity'
import Game from '@/Game/Game'
import SpingNode from '@/Game/Objects/SpringSimulation/SpingNode'
import { Vector2 } from 'three'
import WinBox from '@/Game/Objects/WinBox'
import PlayerBall from '@/Game/Objects/PlayerBall'
import SoundController from '@/Game/Controllers/SoundController'
import LevelContainer from '@/components/LevelContainer.vue'
import CollidableRectangle from '@/Game/Objects/CollidableRectangle'
import MovableRectangle from '@/Game/Objects/MovableRectangle'
import CollidableSpring from '@/Game/Objects/SpringSimulation/CollidableSpring'
const startPosition: Vector2 = new Vector2(100, 700)
const endPosition: Vector2 = new Vector2(500, 500)
const numberOFSegments = 10
const moveVec: Vector2 = endPosition.clone().sub(startPosition).divideScalar(numberOFSegments)

const game: Game = new Game()

game.addObject(new Gravity())
const ball: PlayerBall = new PlayerBall(new Vector2(200, 60))

game.addObject(new WinBox(new Vector2(400, 800)))
game.addObject(ball)

const box = new CollidableRectangle(300, 50, new Vector2(0), "grey")
box.move(new Vector2(200, 600))
box.rotate(40);


const spring: CollidableSpring = new CollidableSpring(startPosition, endPosition, numberOFSegments)
game.addObject(spring)



game.addObject(box)

</script>
