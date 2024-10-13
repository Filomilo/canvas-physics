<template>
    <main class="DemoView">

        <div class="titleStyle">
            Balls canvas Demo
        </div>
        <GameComponent class="gameView" id="shapes_demo" :game="game" />
    </main>
</template>


<script lang="ts" setup>

import GameComponent from '@/components/GameComponent.vue';
import Game from '@/Game/Game';
// import Ball from '@/Game/Objects/Ball';
// import CollidableRectangle from '@/Game/Objects/CollidableRectangle';
import MovablePolygon from '@/Game/Objects/MovablePolygon';
// import PhysicBall from '@/Game/Objects/PhysicBall';
import Point from '@/Game/Objects/Point';
import Polygon from '@/Game/Objects/Polygon';
// import Rectangle from '@/Game/Objects/Rectangle';
import { Euler, Vector2 } from 'three'
const game: Game = new Game();

// console.log("Ball create")
// game.addObject(new PhysicBall(new Vector2(300, 200), 50, "green"))
// game.addObject(new PhysicBall(new Vector2(300, 100), 10, "green"))
// const collider: CollidableRectangle = new CollidableRectangle(100, 200)
// game.addObject(collider)
// collider.rotate(0.55)
// collider.move(new Vector2(240, 400))
</script>