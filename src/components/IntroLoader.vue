<template>
  <div class="loader">
    <div class="loader__brand">
      <p class="loader__kicker">Мастер спорта России</p>
      <img
        class="loader__mark"
        :src="media('yulia-mark.png')"
        alt="Юлия Полубелова — кикбоксинг"
      />
      <p class="loader__name">Юлия Полубелова</p>
    </div>
  </div>
</template>

<script setup>
import { media } from '../media'
</script>
