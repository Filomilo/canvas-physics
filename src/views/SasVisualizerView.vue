<template>
    <main class="DemoView">
        <div class="titleStyle">
            SAS VIsuaLiszer Demo
        </div>

        <GameComponent class="gameView" id="shapes_demo" :game="game" />
    </main>
</template>

<script lang="ts" setup>
import GameComponent from "@/components/GameComponent.vue";
import Game from "@/Game/Game";
import NormalsVisualiser from "@/Game/Objects/Helpers/NormalsVisualiser";
import SasVisulaizer from "@/Game/Objects/Helpers/SasVisulaizer";
import MovablePolygon from "@/Game/Objects/MovablePolygon";
import Point from "@/Game/Objects/Point";
import Polygon from "@/Game/Objects/Polygon";
import { Vector2 } from "three";
const game: Game = new Game();

game.addObject(new Point(new Vector2(20, 20)));

const polygon1: MovablePolygon = new MovablePolygon([
    new Vector2(-100, 100),
    new Vector2(100, 100),
    new Vector2(100, -100),
    new Vector2(-100, -100),
]);
// polygon1.centerOrigin();
// polygon1.resetTransoform();
polygon1.rotate(0.7);
polygon1.move(new Vector2(200, 200));

const polygon2: MovablePolygon = new MovablePolygon([
    new Vector2(-100, 100),
    new Vector2(100, 100),
    new Vector2(100, -100),
    new Vector2(-100, -100),
]);
// polygon1.centerOrigin();
// polygon1.resetTransoform();
polygon2.rotate(0.1);
polygon2.move(new Vector2(500, 200));

game.addObject(polygon1);
game.addObject(new NormalsVisualiser(polygon1));

game.addObject(polygon2);
game.addObject(new SasVisulaizer(polygon1, polygon2));

// game.addObject(new MovablePolygon([new Vector2(100, 100), new Vector2(200, 200), new Vector2(200, 100)]))
</script>
