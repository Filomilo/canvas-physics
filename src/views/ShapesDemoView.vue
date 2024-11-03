<template>
    <main class="DemoView">
        <div class="titleStyle">Shapes canvas Demo</div>

        <GameComponent class="gameView" id="shapes_demo" :game="game" />
    </main>
</template>

<script lang="ts" setup>
import GameComponent from '@/components/GameComponent.vue'
import Game from '@/Game/Game'
import MovablePolygon from '@/Game/Objects/MovablePolygon'
import MovableRectangle from '@/Game/Objects/MovableRectangle'
import Point from '@/Game/Objects/Point'
import Polygon from '@/Game/Objects/Polygon'
import { Vector2 } from 'three'
const game: Game = new Game()

game.addObject(new Point(new Vector2(20, 20)))
const tringle: MovablePolygon = new MovablePolygon([
    new Vector2(-100, -100),
    new Vector2(-100, 200),
    new Vector2(200, 100)
])
tringle.centerOrigin()
tringle.move(new Vector2(100, 100))


const rect = new MovableRectangle(
    50,
    200,
    new Vector2(500, 100)
)

game.addObject(tringle)
game.addObject(rect)
</script>
