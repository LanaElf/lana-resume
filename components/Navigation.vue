<template>
  <div class="flex flex-col items-center top-0 z-10 nav-panel glass glass-black text-calm press-start-2p">
    <nav class="flex flex-wrap justify-center gap-2 md:gap-5 p-2 md:p-3">
        <a href="#skills" class="nav-link">Навыки</a>
        <a href="#experience" class="nav-link">Опыт</a>
        <a href="#code-example" class="nav-link">Пример кода</a>
        <a href="#about-me" class="nav-link">Обо мне</a>
        <a href="#contacts" class="nav-link">Контакты</a>
    </nav>
  </div>
</template>

<style>
.nav-panel {
  position: fixed;
  width: 100vw;
}

.nav-link {
    padding: 6px 12px;
    font-size: 10px;
    border-radius: 30px;
    border: 2px solid var(--calm-color);
    color: var(--calm-color);
    background-color: transparent;
    font-weight: 700;
    transition: 0.5s;
}
@media (max-width: 768px) {
  .nav-link {
    padding: 0 6px;
  }
}
.nav-link:hover {
    color: var(--light-color);
    background-color: var(--calm-color);
    border: 2px solid var(--calm-color);
}
.stripe {
  width: 0;
  height: 5px;
  animation: stripe 2.4s linear forwards;
  justify-self: flex-start;
}
@keyframes stripe {
  from { width: 0 }
  to { width: 100% }
}
@media (max-width: 768px) {
  .stripe {
    height: 0;
  }
}
</style>