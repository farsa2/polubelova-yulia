<template>
  <header class="header">
    <CoachLogo />

    <nav class="desktop-nav">
      <RouterLink v-for="item in nav" :key="item.to" :to="item.to">{{ item.label }}</RouterLink>
    </nav>

    <a class="header-cta magnetic" href="https://t.me/polubelova55" target="_blank">Telegram</a>

    <button class="burger" type="button" @click="menuOpen = !menuOpen" aria-label="Открыть меню">
      <span></span><span></span>
    </button>
  </header>

  <Transition name="menu">
    <nav v-if="menuOpen" class="mobile-nav">
      <RouterLink v-for="item in nav" :key="item.to" :to="item.to" @click="menuOpen = false">{{ item.label }}</RouterLink>
      <a href="tel:+79186055806">Позвонить</a>
      <a href="https://t.me/polubelova55" target="_blank">Telegram</a>
      <a href="mailto:ulabelay2904@gmail.com">Почта</a>
    </nav>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import CoachLogo from './CoachLogo.vue'

const menuOpen = ref(false)
const nav = [
  { label: 'Главная', to: '/' },
  { label: 'О тренере', to: '/about' },
  { label: 'Тренировки', to: '/training' },
  { label: 'Галерея', to: '/gallery' },
  { label: 'Контакты', to: '/contacts' },
]
</script>
