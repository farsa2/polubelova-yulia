<template>
  <div class="section-title" v-motion-slide-visible-once-bottom>
    <p class="eyebrow">{{ eyebrow }}</p>
    <component :is="tag">{{ title }}</component>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: String,
  title: String,
  tag: { type: String, default: 'h2' },
})
</script>
