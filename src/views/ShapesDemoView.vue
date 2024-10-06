<template>
    <main class="DemoView">
        Shapes canvas Demo
        <GameComponent class="gameView" id="shapes_demo" :game="game" />
    </main>
</template>


<script lang="ts" setup>

import GameComponent from '@/components/GameComponent.vue';
import Game from '@/Game/game';

const game: Game = new Game();





</script>