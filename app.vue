<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

.nunito {
  font-family: "Nunito", monospace;
  font-style: normal;
}

:root {
  --dark-color: #020617;
  --light-color: #ffe4e6;
  --calm-color: #fda4af;
  --intense-color: #f43f5e;
  --accent-color: #7c3aed;

  font-family: "Nunito", monospace;
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