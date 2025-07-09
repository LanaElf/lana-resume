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
  <section id="skills" class="flex flex-col items-center py-20 bg-white w-full">
    <h2 class="section-header">Навыки</h2>

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

    <div class="mb-5">
      <div class="font-bold text-intense text-lg mb-2">Hard</div>
      <ul class="flex flex-col gap-1">
        <li>HTML5 + CSS3</li>
        <li>JavaScript / TypeScript</li>
        <li>Vue 3 + Nuxt 3 + Pinia</li>
        <li>Tailwind / Quasar / Vuetify</li>
        <li>Адаптивная вёрстка</li>
        <li>Figma / Photoshop</li>
        <li>Git</li>
        <li>CI/CD (GitHUb Actions)</li>
        <li>Английский язык (~ B1)</li>
        <li>Декомпозиция задач</li>
        <li>DRY, KISS, YAGNI</li>
        <li>ООП, SOLID</li>
      </ul>
    </div>

    <div>
      <div class="font-bold text-intense text-lg mb-2">Soft</div>
      <ul class="flex flex-col gap-1">
        <li>Работа в команде</li>
        <li>Критическое мышление</li>
        <li>Ответственность</li>
        <li>Адаптивность</li>
        <li>Самодисциплина</li>
        <li>Целеустремленность</li>
      </ul>
    </div>
  </section>
</template>

<style>
.yoga-skills {
  margin-top: 100px;
}

.yoga-image {
  max-height: 350px;
  background: url("assets/images/yoga.webp");
  width: 100%;
  filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.3)) brightness(0) saturate(100%) invert(2%) sepia(31%) saturate(7489%) hue-rotate(224deg) brightness(88%) contrast(100%);
}

.skills-circle {
  top: 30%;
  width: 100%;
}

.skill-logo {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  filter: drop-shadow(0px 2px 2px white) drop-shadow(0px 2px 6px white);
  transition: 0.4s;
  transform-origin: 50% 50%;
  animation: 8s linear 0s infinite skills-moving;
}

:root {
  --angles-step: 25.7deg;
  --skills-radius: 170px;
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