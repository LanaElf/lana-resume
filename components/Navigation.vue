<template>
  <div class="flex flex-col items-center bg-dark sticky top-0 z-10">
    <div class="stripe bg-calm"></div>

    <nav class="flex flex-wrap justify-center gap-2 md:gap-5 bg-dark p-2 md:p-3">
        <a href="#skills" class="nav-link">Навыки</a>
        <a href="#experience" class="nav-link">Опыт</a>
        <a href="#code-example" class="nav-link">Пример кода</a>
        <a href="#about-me" class="nav-link">Обо мне</a>
        <a href="#contacts" class="nav-link">Контакты</a>
    </nav>

    <div class="stripe bg-calm"></div>
  </div>
</template>

<style>
.nav-link {
    padding: 4px 12px;
    border-radius: 30px;
    border: 3px solid var(--calm-color);
    color: var(--dark-color);
    background-color: var(--calm-color);
    font-size: 1rem;
    font-weight: 700;
    transition: 0.5s;
}
@media (max-width: 768px) {
  .nav-link {
    padding: 0 6px;
  }
}
.nav-link:hover {
    color: var(--calm-color);
    background-color: transparent;
    border: 3px solid var(--calm-color);
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