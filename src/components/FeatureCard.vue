<template>
  <article class="feature-card" v-motion-slide-visible-once-bottom>
    <span>{{ number }}</span>
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
  </article>
</template>

<script setup>
defineProps({ number: String, title: String, text: String })
</script>
