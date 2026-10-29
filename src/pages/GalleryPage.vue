<template>
  <main class="page">
    <section class="section">
      <SectionTitle eyebrow="Галерея" title="Фото и видео тренировок" />
      <div class="gallery-grid coach-gallery">
        <img class="gallery-big image-card" src="/media/kids-team.jpg" alt="Детская группа" />
        <img class="image-card" src="/media/yulia-kids-line.jpg" alt="Юлия Полубелова с детской группой" />
        <img class="image-card" src="/media/yulia-training.jpg" alt="Юлия Полубелова на тренировке" />
        <video class="image-card" src="/media/yulia-training.webm" autoplay muted loop playsinline></video>
        <video class="image-card" src="/media/yulia-training-2.webm" autoplay muted loop playsinline></video>
      </div>
    </section>
  </main>
</template>

<script setup>
import SectionTitle from '../components/SectionTitle.vue'
</script>
