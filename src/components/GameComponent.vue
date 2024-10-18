<template>
  <div>
    <canvas v-if="props.game && props.id" :id="props.id" ref="canvasRef" />
  </div>
</template>

<script lang="ts" setup>
import Game from "@/Game/Game";
import { onMounted, ref, watch } from "vue";
const props = defineProps<{
  game: Game;
  id: string;
}>();

const canvasRef = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  // console.log("onMOunted")
  // console.log(canvasRef.value)
});

watch(canvasRef, () => {
  if (props.game && canvasRef.value) {
    resizeCanvas();
    props.game.init(canvasRef.value);
  }
});

function resizeCanvas() {
  if (canvasRef.value) {
    canvasRef.value.width = canvasRef.value.clientWidth;
    canvasRef.value.height = canvasRef.value.clientHeight;

    // ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    // ctx.fillStyle = 'blue';
    // ctx.fillRect(10, 10, 100, 100); // Draw a rectangle
  }
}

// Resize canvas when the window is resized
window.addEventListener("resize", resizeCanvas);
</script>

<style lang="css">
canvas {
  width: 100%;
  height: 100%;
  display: block;
  background-color: #f0f0f0;
}
</style>
