<template>
  <main class="page">
    <section class="final-cta contacts-page-card">
      <div>
        <p class="eyebrow dark">Контакты</p>
        <h1>Запишись на<br />пробную<br />тренировку</h1>
        <p>Кикбоксинг в Сочи · Занятия организует спортивная школа · Telegram: @polubelova55 · +7 918 605-58-06</p>
        <div class="hero-actions">
          <a class="btn btn-black" href="https://t.me/polubelova55" target="_blank">Telegram</a>
          <a class="btn btn-black-outline" href="tel:+79186055806">Позвонить</a>
        </div>
      </div>
      <img class="image-card cta-image" :src="media('yulia-portrait.jpg')" width="768" height="1024" alt="Юлия Полубелова, тренер по кикбоксингу в Сочи" decoding="async" />
    </section>
  </main>
</template>

<script setup>
import { media } from '../media'
</script>
