<template>
  <main class="DemoView">
    <div class="titleStyle">Movable spring test</div>
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

const startPosition: Vector2 = new Vector2(50, 50)
const endPosition: Vector2 = new Vector2(300, 300)
const numberOFSegments = 10
const moveVec: Vector2 = endPosition.clone().sub(startPosition).divideScalar(numberOFSegments)

const game: Game = new Game()
const spring: CollidableSpring = new CollidableSpring(startPosition, endPosition, numberOFSegments)
game.addObject(spring)
// const node1: SpingNode = new SpingNode(startPosition);
// node1.IsSimulatable = false;
// spring.addSpringNode(node1)

// for (let index = 1; index < numberOFSegments; index++) {
//     const move = moveVec.clone().multiplyScalar(index);
//     const pos = startPosition.clone().add(move)
//     spring.addSpringNode(new SpingNode(pos))
// }

// const endNode = new SpingNode(new Vector2(endPosition.x, endPosition.y));
// endNode.IsSimulatable = false;
// spring.addSpringNode(endNode)

game.addObject(new Gravity())
// game.addObject(new AirDrag(1.02))
// const ball: PhysicBall = new PhysicBall(new Vector2(200, 30), 20, "red");
// game.addObject(ball)
</script>
