<template>
  <div class="site-shell" @mousemove="onPointerMove">
    <div class="cursor-dot" :style="cursorDotStyle"></div>
    <div class="cursor-ring" :style="cursorRingStyle"></div>

    <Transition name="loader">
      <IntroLoader v-if="isLoading" />
    </Transition>

    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import IntroLoader from './components/IntroLoader.vue'

const isLoading = ref(true)
const cursor = ref({ x: -100, y: -100 })

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1150)
})

function onPointerMove(event) {
  if (!window.matchMedia('(min-width: 900px)').matches) return
  cursor.value = { x: event.clientX, y: event.clientY }
}

const cursorDotStyle = computed(() => ({
  transform: `translate3d(${cursor.value.x - 3}px, ${cursor.value.y - 3}px, 0)`,
}))

const cursorRingStyle = computed(() => ({
  transform: `translate3d(${cursor.value.x - 19}px, ${cursor.value.y - 19}px, 0)`,
}))
</script>
