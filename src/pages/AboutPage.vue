<template>
  <main class="page">
    <section class="section page-hero">
      <SectionTitle tag="h1" eyebrow="О тренере" title="Юлия Полубелова — тренер по кикбоксингу в Сочи" />
      <div class="page-grid">
        <img class="image-card tall" :src="media('yulia-portrait.jpg')" width="768" height="1024" alt="Юлия Полубелова — тренер по кикбоксингу в Сочи" decoding="async" />
        <div class="quote-card">
          <p class="quote">Кикбоксинг — техника, характер и результат.</p>
          <p class="muted">Мастер спорта России. Победительница Всероссийских турниров и Кубка Мира. Финалистка Первенства России. Занятия организует спортивная школа.</p>
          <div class="stats">
            <div><b>01</b><span>мастер спорта</span></div>
            <div><b>02</b><span>кубок мира</span></div>
            <div><b>03</b><span>первенство россии</span></div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { media } from '../media'
import SectionTitle from '../components/SectionTitle.vue'
</script>
