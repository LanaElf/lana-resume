<script setup lang="ts">
useSeoMeta({
  title: 'Lana Dev',
  ogTitle: 'Лана, frontend-разработчик',
  ogImage: 'https://dev-lana.ru/_nuxt/assets/images/dev-lana.jpg'
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet');

.nunito {
  font-family: "Nunito", monospace;
  font-style: normal;
}

:root {
  /*tailwind colors*/
  --dark-color: #171717; /*neutral-900*/
  --light-color: #fff7ed; /*orange-50*/
  --calm-color: #fdba74; /*orange-300*/
  --intense-color: #ea580c; /*orange-600*/
  --accent-color: #059669; /*emerald-600*/

  font-family: "Inter", sans-serif;
  scroll-behavior: smooth;
  color: var(--dark-color);
  cursor: default;
}
.section-header {
    color: var(--intense-color);
    display: flex;
    justify-content: center;
    font-weight: 800;
    font-size: 1.25rem;
    line-height: 1.75rem;
    text-transform: uppercase;
    padding-bottom: 10px;
}

.bg-dark {
  background-color: var(--dark-color);
}
.bg-light {
  background-color: var(--light-color);
}
.bg-calm {
  background-color: var(--calm-color);
}
.bg-intense {
  background-color: var(--intense-color);
}

.text-dark {
  color: var(--dark-color);
}
.text-light {
  color: var(--light-color);
}
.text-calm {
  color: var(--calm-color);
}
.text-intense {
  color: var(--intense-color);
}
.text-accent {
  color: var(--accent-color);
}
</style>