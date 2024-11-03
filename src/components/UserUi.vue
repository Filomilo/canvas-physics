<template>
    <div class="overlayerUI">

        <div class="wideBar topBar">
            <Button icon="pi pi-play" class="UiButton" @click="UiControlMethod.play.value()" />
            <Button icon="pi pi-replay" class="UiButton" @click="UiControlMethod.restart.value()" />
            <Button icon="pi pi-times" class="UiButton" @click="UiControlMethod.refresh.value()" />
        </div>
        <div class="wideBar bottomBar">

            <Button class="UiButton" :style="currLevel === item ? 'background-color: coral' : ''"
                v-for="(item, index) in levelsNubmers" v-bind:key="index" @click="onPageClick(item)">
                {{ item }}
            </Button>

        </div>
    </div>
    <!-- </div>pi-chevron-up -->
</template>

<script setup lang="ts">
import { useLevelsAcces } from '@/States/useLevelsAcces';
import { useUiControlsMethod } from '@/States/useUiControlsMethod';
import Button from 'primevue/button';
import { attribute } from 'three/webgpu';
import { computed, ComputedRef, ref } from 'vue';
// import { useToast } from 'primevue/usetoast';
import { useRoute, useRouter } from 'vue-router';

const UiControlMethod = useUiControlsMethod();
const levelAcces = useLevelsAcces()
// const toast = useToast();
const router = useRouter();
const route = useRoute();

const currLevel: ComputedRef<number> = computed(() => {
    const splits = route.fullPath.split("/");
    const last = splits[splits.length - 1];
    return parseInt(last);
})

const levelsNubmers: ComputedRef<number[]> = computed(() => {
    const arr = [];;
    for (let index = 1; index <= levelAcces.solvedLevles.value + 1 && index <= levelAcces.maxLevels; index++) {
        arr.push(index);

    }
    return arr;
})

const onPageClick = (nm: number) => {
    console.log(`page ${nm} clicked`)
    router.replace(nm.toString())
}

</script>

<style lang="css">
.overlayerUI {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    z-index: 10;
}

.wideBar {
    background-color: rgb(83, 83, 83);
    width: 100%;
    height: 3rem;
    padding: auto;
}

.topBar {
    align-self: flex-start;
    justify-self: flex-start;
    display: flex;
    justify-content: flex-end;
}

.UiButton {
    height: 100%;
    aspect-ratio: 1 / 1;
    margin-right: 0.8rem;
}

.bottomBar {
    justify-self: flex-end;
    align-self: flex-end;
    margin-top: auto;
    display: flex;
    justify-content: center;
}

.buttonFloatContainer {
    margin: 2rem;
    pointer-events: all
}

.p-speeddial-list {
    display: none;
    max-height: fit-content;
}

.p-speeddial-item {
    height: fit-content;
}

.buttonFloat {}
</style>