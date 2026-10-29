<template>
  <div class="section-title" v-motion-slide-visible-once-bottom>
    <p class="eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup>
defineProps({ eyebrow: String, title: String })
</script>
