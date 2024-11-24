<template>
  <div class="FullPage">
    <LevelContainer :game="game" :player="ball" :level="4" :cheat="cheatmethod" />
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
import Fan from '@/Game/Objects/Fan'
const startPosition: Vector2 = new Vector2(100, 700)
const endPosition: Vector2 = new Vector2(500, 500)
const numberOFSegments = 10
const moveVec: Vector2 = endPosition.clone().sub(startPosition).divideScalar(numberOFSegments)

const winBoxPos = new Vector2(500, 430)

const game: Game = new Game()


game.addObject(new WinBox(winBoxPos.clone()))
game.addObject(new CollidableRectangle(80, 20, winBoxPos.clone().add(new Vector2(0, -30)), "grey"))
game.addObject(new CollidableRectangle(20, 80, winBoxPos.clone().add(new Vector2(-30, 0)), "grey"))
game.addObject(new CollidableRectangle(80, 20, winBoxPos.clone().add(new Vector2(0, 30)), "grey"))


game.addObject(new Gravity())
const ball: PlayerBall = new PlayerBall(new Vector2(200, 200))

game.addObject(ball)

const box1 = new MovableRectangle(300, 50, new Vector2(0), "white")
box1.move(new Vector2(200, 600))
box1.rotate(40);
game.addObject(box1)

const box2 = new MovableRectangle(300, 50, new Vector2(0), "white")
box2.move(new Vector2(750, 410))
box2.rotate(-0.9);
game.addObject(box2)


const fan: Fan = new Fan(new Vector2(600, 800))
// fan.move(new Vector2(-200, -200))
game.addObject(fan)

box1.move(new Vector2(-100, -500))
box1.rotate(-40);
box2.move(new Vector2(0, -200))
box2.rotate(0.9);
fan.move(new Vector2(-200, -500))
const cheatmethod = () => {
  fan.resetTransforamtion();
  fan.move(new Vector2(600, 800))
  box1.resetTransforamtion();
  box1.move(new Vector2(200, 600))
box1.rotate(40);
box2.resetTransforamtion();
box2.move(new Vector2(750, 410))
box2.rotate(-0.9);
}
</script>
