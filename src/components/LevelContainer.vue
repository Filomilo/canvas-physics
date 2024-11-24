<template>
    <main class="FullPage">
        <div :id="`level_${props.level}`" class="FullPage" @contextmenu="onRightClick">
            <GameComponent class="gameView" :id="`game_level_${props.level}`" :game="game" />
        </div>
        <ContextMenu ref="menu" :model="ContextItems" />

    </main>
</template>

<script setup lang="ts">
import Game from '@/Game/Game'
import PlayerBall from '@/Game/Objects/PlayerBall'
import { useLevelsAcces } from '@/States/useLevelsAcces'
import { useUiControlsMethod } from '@/States/useUiControlsMethod'
import GameComponent from '@/components/GameComponent.vue'
import ContextMenu from 'primevue/contextmenu';
import { Vector2 } from 'three'
import { ref } from 'vue'


const menu = ref();
const ContextItems = ref([
    { label: 'cheat', icon: 'pi pi-copy' },
]);
const onRightClick = (event: any) => {
    console.log("right click")
    menu.value.show(event);

};

const levelAcces = useLevelsAcces()
const UiControlMethod = useUiControlsMethod()
const props = defineProps<{
    game: Game
    player: PlayerBall
    level: number
}>()
const originalPlayerPositon: Vector2 = props.player.position.clone()
props.player.addOnACtivateMethod(() => {
    console.log('LVL UP')
    props.game.soundController.playLvlUp()
    if (levelAcces.solvedLevles.value < props.level) {
        levelAcces.setNewMax(props.level)
    }
})

UiControlMethod.play.value = () => {
    console.log(`level ${props.level} activated simualtation`)
    props.game._SimulationController.isSimulationActive = true
}
UiControlMethod.restart.value = () => {
    props.player.position = originalPlayerPositon.clone()
    props.player.Velocity = new Vector2(0)
    if (!props.game.hasObject(props.player)) {
        props.game.addObject(props.player)
    }
}
</script>

<style lang="css"></style>
