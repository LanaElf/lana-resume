<template>
    <header class="flex flex-col items-center text-calm text-slate-950">
        <div class="flex flex-col items-center gap-6 py-20 m-auto">
          <SkillsAnimatedCircle />

          <div class="flex justify-center gap-3">
                <h1 class="flex flex-col md:flex-row gap-2 items-center text-typing text-calm font-bold press-start-2p text-sm">
                    <span>Привет!</span>
                    <span>Меня зовут Лана.</span>
                    <span>Я - web-разработчик</span>
                </h1>
          </div>
        </div>
    </header>
</template>

<style scoped>
header {
  min-height: 100vh;
  position: relative;
}
.w-300 {
    width: 300px;
}

.text-typing {
    white-space: nowrap;
    overflow: hidden;
    animation: typing 3s steps(44, end) forwards;
}

@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}

@media (max-width: 768px) {
    .text-typing {
        white-space: unset;
        overflow: unset;
        animation: none;
    }
}
</style>