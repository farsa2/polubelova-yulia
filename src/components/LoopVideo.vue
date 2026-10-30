<template>
  <video
    ref="video"
    :poster="poster"
    :width="width"
    :height="height"
    :aria-label="label"
    muted
    loop
    playsinline
    preload="none"
  />
</template>

<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  src: String,
  type: { type: String, default: 'video/webm' },
  poster: String,
  label: String,
  width: [String, Number],
  height: [String, Number],
  immediate: Boolean,
})

const video = ref(null)

onMounted(() => {
  const node = video.value
  if (!node || !props.src) return

  const start = () => {
    if (!node.querySelector('source')) {
      const source = document.createElement('source')
      source.src = props.src
      source.type = props.type
      node.append(source)
      node.load()
    }
    node.play()?.catch(() => {})
  }

  if (props.immediate || !('IntersectionObserver' in window)) {
    start()
    return
  }

  const observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return
    start()
    observer.disconnect()
  }, { rootMargin: '240px' })
  observer.observe(node)
})
</script>
