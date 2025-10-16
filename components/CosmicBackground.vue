<template>
    <div class="cosmic-bg" ref="scrollBox">
      <!-- ДАЛЬНИЕ -->
      <div class="star-layer" id="far">
        <div
          v-for="(star, idx) in farStars"
          data-allow-mismatch
          :key="'far-' + idx"
          class="star far-star"
          :style="starStyle(star, scrollY, 0.14)"
        />
      </div>
      <!-- СРЕДНИЕ -->
      <div class="star-layer" id="mid">
        <div
          v-for="(star, idx) in midStars"
          data-allow-mismatch
          :key="'mid-' + idx"
          class="star mid-star"
          :style="starStyle(star, scrollY, 0.3)"
        />
      </div>
      <!-- БЛИЖНИЕ -->
      <div class="star-layer" id="near">
        <div
          v-for="(star, idx) in nearStars"
          data-allow-mismatch
          :key="'near-' + idx"
          class="star near-star"
          :style="starStyle(star, scrollY, 0.6)"
        />
      </div>

      <div class="star-layer" id="dust">
        <div
          v-for="(star, idx) in dustStars"
          data-allow-mismatch
          :key="idx"
          class="dust-star"
          :style="{
            left: star.left + '%',
            top: star.top + '%',
            animationDuration: star.twinkle + 's'
          }"
        />
      </div>

      <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrollBox = ref<HTMLDivElement | null>(null)

const scrollY = ref(0)

function handleScroll() {
  if (scrollBox.value) {
    scrollY.value = scrollBox.value.scrollTop
  }
}

onMounted(() => {
  if (scrollBox.value) {
    scrollBox.value.addEventListener('scroll', handleScroll)
  }
})
onBeforeUnmount(() => {
  if (scrollBox.value) {
    scrollBox.value.removeEventListener('scroll', handleScroll)
  }
})

// Общее количество звезд в каждом слое
const nearCount = 20
const midCount = 30
const farCount = 40

function randomPercent() { return Math.random() * 100 }
function randomSize(min: number, max: number) { return (min + Math.random() * (max-min)).toFixed(1) }
function randomTwinkle() { return (1 + Math.random() * 3).toFixed(2) }

const nearStars = Array.from({ length: nearCount }, () => ({
  left: randomPercent(),
  top: randomPercent(),
  size: randomSize(4, 6),     // Ближние - немного крупнее
  twinkle: randomTwinkle()
}))

const midStars = Array.from({ length: midCount }, () => ({
  left: randomPercent(),
  top: randomPercent(),
  size: randomSize(2, 4),
  twinkle: randomTwinkle()
}))

const farStars = Array.from({ length: farCount }, () => ({
  left: randomPercent(),
  top: randomPercent(),
  size: randomSize(1, 2),
  twinkle: randomTwinkle()
}))

type Star = {
    left: number,
    top: number,
    size: string,
    twinkle: string
}

function starStyle(star: Star, scrollY: number, parallaxFactor: number) {
  // Смещение по вертикали: top плюс скролл с этим фактором
  return {
    left: star.left + '%',
    top: `calc(${star.top}% - ${scrollY * parallaxFactor}px)`,
    width: star.size + 'px',
    height: star.size + 'px',
    animationDuration: star.twinkle + 's'
  }
}

const dustCount = 60
// Массив: случайные координаты и скорость мерцания для каждой звезды
const dustStars = Array.from({ length: dustCount }, () => ({
  left: randomPercent(),
  top: randomPercent(),
  twinkle: randomTwinkle()
}))
</script>

<style scoped>
.cosmic-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background: radial-gradient(circle, #000000 10%, #54005b 15%, #3f005f 20%, #000000 30%, #31004e 50%, #1e0046 60%, #000000 70%, #310143 80%, #0d003b 90%, #000000 100%);
    background-position: center;
    overflow-x: hidden;
    animation: space-diving 18s alternate infinite;
    cursor: url('assets/images/icons/cursor-spaceship.png'), auto;
    scroll-behavior: smooth;
        scrollbar-color: var(--intense-color) #000
}

@keyframes space-diving {
    0% {
        background-size: 100%;
    }
    100% {
        background-size: 600%;
    }
}

.star-layer {
  position: fixed;
  left: 0; top: 0;
  width: 100vw;
  height: 300%;
  pointer-events: none;
  z-index: -1;
}
.far-star {
  opacity: 0.6;
  box-shadow: 0 0 10px 4px #e6e7fe;
  animation: star-twinkle infinite alternate;
}
.mid-star {
  opacity: 0.7;
  box-shadow: 0 0 12px 6px #f7f0ff;
  animation: star-twinkle infinite alternate;
}
.near-star {
  opacity: 0.92;
  box-shadow:
    0 0 8px 4px #fff7,
    0 0 20px 8px #bea6ff55;
  animation: star-twinkle 2s infinite alternate;
}

.star {
  position: absolute;
  border-radius: 50%;
  background: white;
  pointer-events: none;
}

@keyframes star-twinkle {
  0%   { opacity: 0.2; box-shadow: 0 0 3px 2px #fff8; }
  100% { opacity: 1; box-shadow: 0 0 12px 5px #fff; }
}

.dust-star {
  position: absolute;
  width: 1.5px;
  height: 1.5px;
  background: white;
  opacity: 0.7;
  box-shadow: 0 0 1px 0px #fff;
  border-radius: 50%;
  animation: dust-twinkle 3s infinite alternate;
  pointer-events: none;
}

@keyframes dust-twinkle {
  0%   { opacity: 0; }
  100% { opacity: 0.85; }
}
</style>