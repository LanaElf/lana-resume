<script setup lang="ts">
import {onMounted} from "vue";

const props = defineProps({
  chosenPuzzle: {
    type: Object,
    required: true
  },
  difficulty: {
    type: Object,
    required: true
  },
  backgroundPosition: {
    type: String,
    required: true
  },
  rotationAngles: {
    type: Array  as PropType<String[]>,
    required: true
  },
  anglesStep: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['rightPosition'])

let rotationAngle: Ref<number> = ref(getRandomAngle());

watch(props.chosenPuzzle, () => {
  rotationAngle.value = getRandomAngle();
})

watch(rotationAngle, (newValue) => {
  checkRotation(newValue);
})

function getRandomAngle() {
  return Number(props.rotationAngles[Math.floor(Math.random() * props.rotationAngles.length)])
}

function checkRotation(angle: number) {
  if (angle % 360 === 0) {
    emit('rightPosition', true)
  } else {
    emit('rightPosition', false)
  }
}

onMounted(() => {
  checkRotation(rotationAngle.value);
})

// Экспорт для тестов
defineExpose({
  rotationAngle
})
</script>

<template>
  <div
      data-allow-mismatch
      class="puzzle-detail"
      :style="{
        'width': chosenPuzzle.containerWidth / difficulty.detailsInRow + 'px',
        'height': chosenPuzzle.containerHeight / difficulty.detailsInRow + 'px',
        'background-image': 'url(' + chosenPuzzle.picturePath + ')',
        'background-position': backgroundPosition,
        'background-size': chosenPuzzle.containerWidth + 'px ' + chosenPuzzle.containerHeight + 'px',
        'transform': 'rotate(' + rotationAngle + 'deg)'
      }"
      @click="rotationAngle += anglesStep"
  >
    <img src="../../assets/images/rotation.png"
         class="detail-rotation-button"
         alt="поверни"
    >
  </div>
</template>

<style scoped>
.puzzle-detail {
  cursor: grab;
  position: relative;
}

.detail-rotation-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  filter: invert() drop-shadow(0 0 3px var(--intense-color)) drop-shadow(0 0 4px var(--calm-color));
  opacity: 0;
  transition: 0.3s;
  cursor: pointer;
}

.puzzle-detail:hover .detail-rotation-button {
  opacity: 1;
}
</style>