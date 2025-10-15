<script setup lang="ts">
</script>

<template>
  <section id="code-example" class="w-4/6">
    <div class="flex flex-col items-center my-10 p-10 glass glass-black glass-card text-white">
    <h2 class="section-header">Пример кода</h2>

    <div class="px-4">
      Для демонстрации некоторых навыков я написала мини-игру.
      <br>Картинка делится на количество частей, зависимое от выбранной сложности.
      <br>Детали представляют собой блоки с бэкграундом-картинкой, спозиционированные в зависимости от
      расположения детали на поле и повернутые на рандомный угол (с шагом в 45 градусов).
      <br>Нужно вращать детали, пока картинка не соберется.
    </div>

    <PuzzleGame />

    <div>
      А чтобы увидеть код этого сайта - нужно выиграть.
      <br>Шутка. Вот
        <a href="https://github.com/LanaElf/lanaelf.github.io/tree/main/LanaResume"
           target="_blank"
           class="text-accent font-semibold">
          ссылка
        </a>
      на GitHub.
    </div>
    </div>
  </section>
</template>

<style>
</style>