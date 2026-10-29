<template>
  <article class="generated-poster" :class="[`generated-poster--${variant}`, customClass]">
    <div class="poster-noise"></div>
    <div class="poster-lines"></div>
    <div class="poster-mark">BLOK</div>
    <div class="poster-person"></div>
    <div class="poster-content">
      <span>{{ label }}</span>
      <h3>{{ title }}</h3>
    </div>
  </article>
</template>

<script setup>
defineProps({ label: String, title: String, variant: { type: String, default: 'portrait' }, customClass: String })
</script>
