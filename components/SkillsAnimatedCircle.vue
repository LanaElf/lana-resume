<script setup lang="ts">
const skillsNames: string[] = [
  'html', 'css', 'javascript', 'typescript',
  'vue', 'pinia', 'nuxt',
  'perplexity', 'grok',
  'tailwind', 'quasar',
  'git', 'figma', 'vite'
]

const activeLogoName = ref('');

</script>

<template>
    <div class="yoga-skills relative pb-10">
      <img class="yoga-image" src="/assets/images/yoga.webp" alt="lotus pose"/>

      <div class="skills-circle absolute">
        <img v-for="skillName in skillsNames"
             class="skill-logo"
             :src="'_nuxt/assets/images/logos/'+ skillName +'.webp'"
             @mouseover="activeLogoName = skillName"
             @mouseout="activeLogoName = ''"
             alt="skill's logos"
        />
      </div>

      <div class="active-logo-name absolute font-semibold text-white text-md uppercase">
        {{ activeLogoName }}
      </div>
    </div>
</template>

<style>
.yoga-skills {
  margin-top: 100px;
  animation: from-center 2s ease-in-out forwards;
}

@keyframes from-center {
    from {
        width: 0px;
        height: 0px;
    }
    to {
        width: 300px;
        height: 300px;
    }
}

.yoga-image {
  max-height: 300px;
  background: url("assets/images/yoga.webp");
  width: 100%;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 1)) brightness(1) saturate(100%) invert(2%) sepia(31%) saturate(7489%) hue-rotate(224deg) brightness(88%) contrast(100%);
}

.skills-circle {
  top: 30%;
  width: 100%;
}

.skill-logo {
  width: 45px;
  height: 45px;
  position: absolute;
  top: 50%;
  left: 50%;
  filter: drop-shadow(0px 0px 1px white) drop-shadow(0px 0px 3px white);
  transition: 0.4s;
  transform-origin: 50% 50%;
  animation: 8s linear 0s infinite skills-moving;
}

:root {
  --angles-step: 25.7deg; /*зависит от количества элементов: 360deg/кол-во */
  --skills-radius: 140px;
}

@media (max-width: 400px) {
  :root {
    --skills-radius: 140px;
  }
}

@keyframes skills-moving {
  from {
    transform:
        translate(-50%, -50%)
        rotate(calc(var(--angles-step) * var(--i)))
        translate(var(--skills-radius))
        rotate(calc(-1 * var(--angles-step) * var(--i)));
  }

  to {
    transform:
        translate(-50%, -50%)
        rotate(calc(var(--angles-step) * var(--i) + 360deg))
        translate(var(--skills-radius))
        rotate(calc(-1 * var(--angles-step) * var(--i) - 360deg));
  }
}

.skill-logo:nth-child(1) {--i: 0;}
.skill-logo:nth-child(2) {--i: 1;}
.skill-logo:nth-child(3) {--i: 2;}
.skill-logo:nth-child(4) {--i: 3;}
.skill-logo:nth-child(5) {--i: 4;}
.skill-logo:nth-child(6) {--i: 5;}
.skill-logo:nth-child(7) {--i: 6;}
.skill-logo:nth-child(8) {--i: 7;}
.skill-logo:nth-child(9) {--i: 8;}
.skill-logo:nth-child(10) {--i: 9;}
.skill-logo:nth-child(11) {--i: 10;}
.skill-logo:nth-child(12) {--i: 11;}
.skill-logo:nth-child(13) {--i: 12;}
.skill-logo:nth-child(14) {--i: 13;}

.skill-logo:hover {
  width: 70px;
  height: 70px;

}

.active-logo-name {
  top: 37%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>