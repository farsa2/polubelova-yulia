<template>
  <RouterLink to="/" class="coach-logo" aria-label="Юлия Полубелова">
    <img class="coach-logo__mark" :src="media('yulia-mark.png')" alt="" />
    <div>
      <b>Юлия Полубелова</b>
      <small>Кикбоксинг в Сочи</small>
    </div>
  </RouterLink>
</template>

<script setup>
import { media } from '../media'
</script>
