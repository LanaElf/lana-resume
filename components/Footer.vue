<script setup lang="ts">
function copy(text: string) {
  navigator.clipboard.writeText(text).then(function () {
    alert('Почтовый адрес скопирован');
  });
}
</script>

<template>
  <footer id="contacts"
          class="flex flex-col gap-2 items-center py-10
                  bg-dark text-calm font-bold">
    <a href="https://t.me/elf_lana"
       target="_blank"
       class="flex items-center gap-2 hover-light"
    >
      <img class="contact-ico" src="/assets/images/icons/telegram.png" alt="Telegram:"/>
      elf_lana
    </a>

    <a class="flex items-center gap-2 cursor-copy hover-light"
       @click="copy('elf_lana@vk.com')"
    >
      <img class="contact-ico" src="/assets/images/icons/mail.png" alt="Почта:"/>
      elf_lana@vk.com
    </a>

    <a href="https://github.com/LanaElf"
       target="_blank"
       class="flex items-center gap-2 hover-light"
    >
      <img class="contact-ico" src="/assets/images/icons/github.png" alt="GitHub:"/>
      GitHub
    </a>
  </footer>
</template>

<style>
.hover-light:hover {
  color: var(--light-color);
}

.hover-light:hover img {
  filter: brightness(0) saturate(100%) invert(94%) sepia(87%) saturate(488%) hue-rotate(287deg) brightness(102%) contrast(103%);
}

.contact-ico {
  height: 20px;
  filter: brightness(0) saturate(100%) invert(90%) sepia(12%) saturate(2735%) hue-rotate(314deg) brightness(102%) contrast(103%);
}
</style>