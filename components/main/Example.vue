<script setup lang="ts">
</script>

<template>
  <section id="code-example" class="w-5/6 md:w-4/6">
    <div class="flex flex-col items-center my-10 glass glass-black glass-card text-white">
      <div class="p-5 sm:p-10">
        <h2 class="section-header">Пример кода</h2>

        <div>
          Для демонстрации некоторых навыков я написала мини-игру.
          <br>Картинка делится на количество частей, зависимое от выбранной сложности.
          <br>Детали представляют собой блоки с бэкграундом-картинкой, спозиционированные в зависимости от
          расположения детали на поле и повернутые на рандомный угол (с шагом в 45 градусов).
          <br>Нужно вращать детали, пока картинка не соберется.
        </div>
      </div>


      <PuzzleGame />

      <div class="p-5 sm:p-10">
        А чтобы получить код - нужно выиграть.
        <br>Шутка. Логику игры можно увидеть на GitHub в компонентах <a href="https://github.com/LanaElf/lana-resume/blob/master/components/puzzle/PuzzleGame.vue" target="_blank">PuzzleGame.vue</a>, <a href="https://github.com/LanaElf/lana-resume/blob/master/components/puzzle/PuzzleDetail.vue" target="_blank">PuzzleDetail.vue</a> и сторе <a href="https://github.com/LanaElf/lana-resume/blob/master/stores/puzzle-store.ts" target="_blank">puzzle-store.ts</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
a {
  color: var(--accent-color);
}
</style>