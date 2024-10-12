<template>
    <main class="DemoView">

        <div class="titleStyle">
            Collision canvas Demo
        </div>
        <GameComponent class="gameView" id="shapes_demo" :game="game" />
    </main>
</template>


<script lang="ts" setup>

import GameComponent from '@/components/GameComponent.vue';
import Game from '@/Game/Game';
import MovablePolygon from '@/Game/Objects/MovablePolygon';
import Point from '@/Game/Objects/Point';
import Polygon from '@/Game/Objects/Polygon';
import { Vector2 } from 'three'
const game: Game = new Game();

game.addObject(new Point(new Vector2(20, 20)));
game.addObject(new MovablePolygon([new Vector2(100, 100), new Vector2(200, 200), new Vector2(200, 100)]))
let rec: MovablePolygon = new MovablePolygon([new Vector2(300, 250), new Vector2(350, 300), new Vector2(300, 400), new Vector2(200, 400)])
rec.move(new Vector2(-90, -100))
game.addObject(rec)



</script>