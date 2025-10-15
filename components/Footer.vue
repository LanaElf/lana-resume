<script setup lang="ts">
function copy(text: string) {
  navigator.clipboard.writeText(text).then(function () {
    alert('Почтовый адрес скопирован');
  });
}
</script>

<template>
  <footer id="contacts"
          class="flex flex-col gap-2 items-center py-10 mt-5 text-calm font-bold glass glass-black">
    <a href="https://t.me/elf_lana"
       target="_blank"
       class="flex items-center gap-2 hover-light"
    >
      <img class="contact-ico" src="/assets/images/icons/telegram.png" alt="Telegram:"/>
      elf_lana
    </a>

    <a href="https://barnaul.hh.ru/resume/7578d4c0ff0b764c860039ed1f5761786f4c4a"
       target="_blank"
       class="flex items-center gap-2 hover-light"
    >
      <img class="contact-ico" src="/assets/images/icons/hh.png" alt="GitHub:"/>
      HeadHunter
    </a>

    <a href="https://github.com/LanaElf"
       target="_blank"
       class="flex items-center gap-2 hover-light"
    >
      <img class="contact-ico" src="/assets/images/icons/github.png" alt="GitHub:"/>
      GitHub
    </a>

    <a class="flex items-center gap-2 cursor-copy hover-light"
       @click="copy('elf_lana@vk.com')"
    >
      <img class="contact-ico" src="/assets/images/icons/mail.png" alt="Почта:"/>
      elf_lana@vk.com
    </a>
  </footer>
</template>

<style>
.hover-light:hover {
  color: var(--light-color);
}

.contact-ico {
  height: 20px;
  filter: invert(100%);
}
</style>