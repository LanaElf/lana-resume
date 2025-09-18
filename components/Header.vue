<script setup lang="ts">
</script>

<template>
    <header class="flex flex-col items-center bg-dark text-calm text-slate-950">
        <div class="flex flex-col md:flex-row items-center gap-10 py-20">
            <div class="main-photo"></div>

            <div class="flex justify-center gap-3 w-300">
                <h1 class="flex flex-col gap-1 font-bold text-xl">
                    <span class="text-typing-1">Привет! Меня зовут Лана</span>
                    <span class="text-typing-2 w-0">Я - web-разработчик</span>
                </h1>
            </div>
        </div>
    </header>
</template>

<style scoped>
.w-300 {
    width: 300px;
}
.main-photo {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: url("@/assets/images/main-photo.webp");
    background-size: contain;
}

.text-typing-1,
.text-typing-2 {
    white-space:nowrap;
    overflow:hidden;
}
.text-typing-1 {
    animation: typing 1.2s steps(23, end) forwards;
}
.text-typing-2 {
    animation: typing 1.2s steps(24, end) forwards;
    animation-delay: 1.2s;
}

@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}
</style>