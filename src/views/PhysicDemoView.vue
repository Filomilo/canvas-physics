<template>
    <main class="DemoView">
        Balls canvas Demo
        <GameComponent class="gameView" id="shapes_demo" :game="game" />
    </main>
</template>


<script lang="ts" setup>

import GameComponent from '@/components/GameComponent.vue';
import Game from '@/Game/Game';
import Ball from '@/Game/Objects/Ball';
import MovablePolygon from '@/Game/Objects/MovablePolygon';
import Point from '@/Game/Objects/Point';
import Polygon from '@/Game/Objects/Polygon';
import {Vector2} from 'three'
const game: Game = new Game();

console.log("Ball create")
game.addObject(new Ball(new Vector2(300,300),50,"green"))

</script>