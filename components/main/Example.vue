<script setup lang="ts">
import {usePuzzleStore} from "~/stores/puzzle-store";
import {onMounted} from "vue";
import PuzzleDetail from "~/components/puzzle/PuzzleDetail.vue";

const puzzleStore = usePuzzleStore();

onMounted(() => {
  puzzleStore.choosePicture(puzzleStore.chosenPuzzle.picturePath);
})
</script>

<template>
  <section id="code-example" class="flex flex-col items-center py-20 bg-white w-full">
    <h2 class="section-header">Пример кода</h2>

    <div class="md:w-4/6 px-4">
      Для демонстрации некоторых моих навыков я написала мини-игру.
      <br>Выбранная картинка "делится" на количество частей, зависимое от выбранной сложности.
      <br>Детали представляют собой блоки с бэкграундом-выбранной картинкой, спозиционированным в зависимости от
      расположения детали, повернутые на рандомный угол (с шагом в 45 градусов).
      <br>Нужно вращать детали, пока картинка не соберется.
    </div>

    <div class="bg-light py-10 md:px-10 my-7 md:rounded-2xl md:w-4/6 flex flex-col items-center relative">
      <div class="flex justify-center text-lg font-semibold pb-5">Выбери картинку</div>

      <div class="w-full overflow-x-auto relative h-40 max-sm:h-auto rose-scrollbar">
        <ul class="flex max-sm:flex-wrap gap-3 px-2 justify-center pictures-container absolute max-sm:relative"
            id="array-rendering">
          <li v-for="picturePath in puzzleStore.picturePaths">
            <img @click=puzzleStore.choosePicture(picturePath) :src=picturePath
                 class="rounded-2xl max-w-32 max-h-32 cursor-pointer"
                 :class="puzzleStore.chosenPuzzle.picturePath === picturePath && 'chosen-picture'"
                 alt="Картинка для пазла"
            >
          </li>
        </ul>
      </div>

      <div class="flex justify-center text-lg font-semibold mt-10 pb-5">Выбери уровень сложности</div>

      <div class="tabs">
        <div class="flex gap-5 justify-center">
          <button
            v-for="difficulty in puzzleStore.difficulties.map((item: any) => item.name)"
            :key="difficulty"
            :id=difficulty
            class="text-white font-semibold rounded-2xl py-1 px-3 hover-up relative difficulty"
            :class="puzzleStore.chosenPuzzle.difficulty === difficulty ? 'bg-intense' : 'bg-calm'"
            @click="puzzleStore.chooseDifficulty(difficulty)"
          >
            {{ difficulty }}
          </button>
        </div>

        <div class="tabs-body relative mt-6">
          <div
            v-for="difficulty in puzzleStore.difficulties"
            :key="difficulty.name"
            v-show="puzzleStore.chosenPuzzle.difficulty === difficulty.name"
            class="tabs-body-item"
          >
            <ul :style="{
                'width': puzzleStore.chosenPuzzle.containerWidth + 'px',
                'height': puzzleStore.chosenPuzzle.containerHeight + 'px'}"
                class="puzzle-container flex my-10 mx-2 md:mx-0 max-sm:overflow-hidden"
                :class="puzzleStore.win && 'completed'"
            >
              <li v-for="detailPosition in difficulty.detailsPosition"
                  :key="detailPosition"
                  class="puzzle-detail"
              >
                <PuzzleDetail
                    :chosenPuzzle="puzzleStore.chosenPuzzle"
                    :difficulty="difficulty"
                    :rotationAngles="puzzleStore.rotationAngles"
                    :angles-step="puzzleStore.anglesStep"
                    :background-position="detailPosition"
                    @right-position="(value) => puzzleStore.checkCompleteness(value, difficulty, detailPosition)"
                />
              </li>
            </ul>
          </div>

          <div v-show="puzzleStore.win" class="congrats">Победа!</div>
        </div>
      </div>
    </div>

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
  </section>
</template>

<style>
.puzzle-container {
  flex-wrap: wrap;
  max-height: 500px;
  border-radius: 20px;
}

.puzzle-container.completed {
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.pictures-container {
  max-height: 250px;
  overflow-y: auto;
}

.rose-scrollbar {
  scrollbar-color: var(--calm-color) #fff;
  scrollbar-width: thin;
}

.congrats {
  display: flex;
  background: url('assets/images/heart.png');
  background-size: contain;
  color: #fff;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: .3s ease-out 0s infinite alternate congrats;
  filter: drop-shadow(0 0 10px #fff) drop-shadow(0 0 5px rgba(251, 113, 133, 0.7));
  opacity: 0.8;
}

@keyframes congrats {
  from {
    width: 90px;
    height: 90px;
  }

  to {
    width: 110px;
    height: 110px;
  }
}

.chosen-picture {
  border: 3px solid var(--intense-color);
}
</style>