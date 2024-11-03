<template>
    <main class="FullPage">
        <div :id="`level_${props.level}`" class="FullPage">
            <GameComponent class="gameView" :id="`game_level_${props.level}`" :game="game" />

        </div>
        <!-- <div class="titleStyle">
            Level {{ props.level }}
        </div> -->

    </main>

</template>


<script setup lang="ts">
import Game from '@/Game/Game';
import PlayerBall from '@/Game/Objects/PlayerBall';
import { useLevelsAcces } from '@/States/useLevelsAcces';
import GameComponent from '@/components/GameComponent.vue';

const levelAcces = useLevelsAcces();

const props = defineProps<{
    game: Game,
    player: PlayerBall,
    level: number
}>()

props.player.addOnACtivateMethod(() => {
    console.log("LVL UP")
    props.game.soundController.playLvlUp();
    if (levelAcces.solvedLevles.value < props.level) {
        levelAcces.setNewMax(props.level)
    }
})

</script>

<style lang="css"></style>