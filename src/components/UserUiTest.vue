<template>
    <div class="overlayer">
        <div class="buttonFloatContainer">
            <SpeedDial ico :model="items" direction="up" class="buttonFloat">
                <template #button="{ toggleCallback }">
                    <Button outlined class="border" @click="toggleCallback">
                        <i class="pi pi-chevron-up" style="font-size: 2rem"></i>
                    </Button>
                </template>
                <template #item="{ item, toggleCallback }">
                    <div class="flex flex-col items-center justify-between gap-2 p-2 border rounded border-surface-200 dark:border-surface-700 w-20 cursor-pointer"
                        @click="toggleCallback">
                        <span :class="item.icon" />
                        <span>
                            {{ item.label }}
                        </span>
                    </div>
                </template>
            </SpeedDial>
        </div>
    </div>
    <!-- </div>pi-chevron-up -->
</template>

<script setup lang="ts">

import { ref } from 'vue';
// import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

// const toast = useToast();
const router = useRouter();

const items = ref([
    {
        label: 'Floor Test',
        icon: 'pi pi-link',
        command: () => {
            router.push("FloorTest")
            // window.location.href = 'https://vuejs.org/'
        }
    },
    {
        label: 'Physic Demo ',
        icon: 'pi pi-link',
        command: () => {
            router.push("PhysicDemoView")
            // window.location.href = 'https://vuejs.org/'
        }
    },
    {
        label: 'Sas Visualizer',
        icon: 'pi pi-link',
        command: () => {
            router.push("SasVisualizerView")
            // window.location.href = 'https://vuejs.org/'
        }
    },
    {
        label: 'Shapes Demo ',
        icon: 'pi pi-link',
        command: () => {
            router.push("ShapesDemoView")
            // window.location.href = 'https://vuejs.org/'
        }
    }
    ,
    {
        label: 'Spring Simulation ',
        icon: 'pi pi-link',
        command: () => {
            router.push("SpringSimulationTest")
            // window.location.href = 'https://vuejs.org/'
        }
    }
    ,
    {
        label: 'Movable Spring Test ',
        icon: 'pi pi-link',
        command: () => {
            router.push("MovableSpringTest")
            // window.location.href = 'https://vuejs.org/'
        }
    },
    {
        label: 'Particle Test ',
        icon: 'pi pi-link',
        command: () => {
            router.push("ParticleTest")
            // window.location.href = 'https://vuejs.org/'
        }
    },
    {
        label: 'Fan Test ',
        icon: 'pi pi-link',
        command: () => {
            router.push("FanTest")
            // window.location.href = 'https://vuejs.org/'
        }
    },
    {
        label: 'Win Activation Test ',
        icon: 'pi pi-link',
        command: () => {
            router.push("WinActivationTest")
            // window.location.href = 'https://vuejs.org/'
        }
    }
])
</script>

<style lang="css">
.overlayer {
    position: absolute;
    pointer-events: none;
    width: 100%;
    height: 100%;
    display: flex;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
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