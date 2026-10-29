<template>
  <article class="training-row" v-motion-slide-visible-once-bottom>
    <span>{{ meta }}</span>
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
  </article>
</template>

<script setup>
defineProps({ title: String, meta: String, text: String })
</script>
