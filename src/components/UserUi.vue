<template>
    <div class="overlayer">
        <div class="buttonFloatContainer">
            <SpeedDial :model="items" direction="up" class="buttonFloat" />
        </div>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
// import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

// const toast = useToast();
const router = useRouter();

const items = ref([
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
            // toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added', life: 3000 });
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            // toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            // toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            // router.push('/fileupload');
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
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