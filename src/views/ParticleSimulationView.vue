<template>
  <main class="DemoView">
    <div class="titleStyle">Particles Demo</div>
    <GameComponent class="gameView" id="shapes_demo" :game="game" />
  </main>
</template>

<script lang="ts" setup>
import Game from '@/Game/Game'
import OnMousePartileEmitter from '@/Game/Objects/Particles/Emitters/OnMousePartileEmitter'
import ParticleSolver from '@/Game/Objects/Particles/ParticleSolver'
import GameComponent from '@/components/GameComponent.vue'

const game: Game = new Game()
const particleSolver = new ParticleSolver()

game.addObject(particleSolver)
particleSolver.addEmitter(new OnMousePartileEmitter(1, 3))
</script>
