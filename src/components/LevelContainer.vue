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
import { compile, ref } from 'vue'
const levelAcces = useLevelsAcces()
const UiControlMethod = useUiControlsMethod()
const props = defineProps<{
    game: Game
    player: PlayerBall
    level: number
    cheat: Function
}>()

const menu = ref();
const cheat = () => {
    props.cheat();
}
const ContextItems = ref([
    { label: 'cheat', icon: 'pi pi-copy', command: cheat },
]);

const onRightClick = (event: any) => {
    console.log("right click")
    menu.value.show(event);

};


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

<style lang="css">
.p-contextmenu p-component p-contextmenu-mobile{

}
:root {
    --p-contextmenu-background: rgb(3, 3, 3);
    --p-contextmenu-border-color: transparent;
    --p-contextmenu-color: rgb(51, 51, 51);
    --p-contextmenu-item-color: white;
    --p-contextmenu-item-focus-color: white;
    --p-contextmenu-item-icon-color: white;
    --p-contextmenu-item-focus-background: rgb(51, 51, 51);
    --p-contextmenu-item-active-background: rgb(51, 51, 51);
    --p-contextmenu-item-icon-focus-color: white;
    --p-contextmenu-item-focus-background: rgb(148, 101, 101);
}
  
</style>
