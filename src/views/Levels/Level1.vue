<template>
    <div class="FullPage">
        <LevelContainer :game="game" :player="ball" :level="1" :cheat="cheatmethod" />
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
const startPosition: Vector2 = new Vector2(100, 700)
const endPosition: Vector2 = new Vector2(500, 500)
const numberOFSegments = 10
const moveVec: Vector2 = endPosition.clone().sub(startPosition).divideScalar(numberOFSegments)

const game: Game = new Game()

game.addObject(new Gravity())
const ball: PlayerBall = new PlayerBall(new Vector2(200, 60))

game.addObject(new WinBox(new Vector2(600, 500)))
game.addObject(ball)

const box = new MovableRectangle(500, 50, new Vector2(0), "white")
box.move(new Vector2(200, 700))
box.rotate(40);
box.rotate(-1.5)
box.move(new Vector2(800, -200))

game.addObject(box)

const cheatmethod = () => {
    box.setPostion(new Vector2(200, 700))
}

</script>
