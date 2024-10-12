<template>
    <div class="overlayer">
        <div class="buttonFloatContainer">
            <SpeedDial ico :model="items" direction="up" class="buttonFloat">
                <template #button="{ toggleCallback }">
                    <Button outlined class="border" @click="toggleCallback">
                        <i class="pi pi-chevron-up" style="font-size: 2rem"></i>
                    </Button>
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
        label: 'SasVisualizerView',
        icon: 'pi pi-link',
        command: () => {
            router.push("SasVisualizerView")
            // window.location.href = 'https://vuejs.org/'
        }
    },
    {
        label: 'CollisionsDemo',
        icon: 'pi pi-shield',
        command: () => {
            router.push("CollisionsDemo")
            // window.location.href = 'https://vuejs.org/'
        }
    },
    {
        label: 'PhysicDemoView',
        icon: 'pi pi-flag',
        command: () => {
            router.push("PhysicDemoView")
            // window.location.href = 'https://vuejs.org/'
        }
    }
    ,
    {
        label: 'ballsDemo',
        icon: 'pi pi-circle',
        command: () => {
            router.push("ballsDemo")
            // window.location.href = 'https://vuejs.org/'
        }
    }
    ,
    {
        label: 'ShapesDemo',
        icon: 'pi pi-box',
        command: () => {
            router.push("ShapesDemo")
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

.buttonFloat {}
</style>