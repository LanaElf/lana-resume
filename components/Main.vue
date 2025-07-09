<script setup lang="ts">
import Skills from "~/components/main/Skills.vue";
import Experience from "~/components/main/Experience.vue";
import Example from "~/components/main/Example.vue";
import About from "~/components/main/About.vue";
</script>

<template>
  <div class="w-full text-center m-auto">
    <div class="flex flex-col justify-center items-center">
      <Skills />
      <Experience />
      <Example />
      <About />
    </div>
  </div>
</template>

<style>
</style>