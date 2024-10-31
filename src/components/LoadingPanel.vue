<template>
    <div class="overlayerLoading">
        <div class="loadingConatiner">
            <div class="lds-dual-ring"></div>
            Loading
        </div>

    </div>
    <!-- </div>pi-chevron-up -->
</template>

<script setup lang="ts">

</script>

<style lang="css">
.overlayerLoading {
    position: absolute;
    pointer-events: none;
    width: 100%;
    height: 100%;
    display: flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;

}

.buttonFloatContainer {
    margin: 2rem;
    pointer-events: all
}

.loadingConatiner {
    background-color: rgb(27, 27, 27);
    width: 70%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 2rem;
}

.buttonFloat {}


.lds-dual-ring {
    /* change color here */
    color: #1c4c5b
}

.lds-dual-ring,
.lds-dual-ring:after {
    box-sizing: border-box;
}

.lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
}

.lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6.4px solid currentColor;
    border-color: currentColor transparent currentColor transparent;
    animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>