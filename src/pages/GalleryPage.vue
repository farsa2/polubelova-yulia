<template>
  <main class="page">
    <section class="section">
      <SectionTitle tag="h1" eyebrow="Галерея" title="Фото и видео тренировок" />
      <div class="gallery-grid coach-gallery">
        <img class="gallery-big image-card" :src="media('kids-team.jpg')" width="768" height="1024" alt="Детская группа кикбоксинга в Сочи" decoding="async" />
        <img class="image-card" :src="media('yulia-kids-line.jpg')" width="775" height="1024" alt="Кикбоксинг для детей — Юлия Полубелова с группой" loading="lazy" decoding="async" />
        <img class="image-card" :src="media('yulia-training.jpg')" width="767" height="1024" alt="Тренировка по кикбоксингу" loading="lazy" decoding="async" />
        <LoopVideo class="image-card" :src="media('yulia-training.webm')" :poster="media('yulia-training.jpg')" label="Видео тренировки по кикбоксингу" width="767" height="1024" />
        <LoopVideo class="image-card" :src="media('yulia-training-2.webm')" :poster="media('yulia-kids-line.jpg')" label="Видео детской группы кикбоксинга" width="775" height="1024" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { media } from '../media'
import SectionTitle from '../components/SectionTitle.vue'
import LoopVideo from '../components/LoopVideo.vue'
</script>
