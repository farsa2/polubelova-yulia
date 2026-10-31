<template>
  <main>
    <section class="hero coach-hero">
      <div class="noise"></div>
      <div class="hero__media" v-motion-slide-visible-once-right>
        <LoopVideo class="hero-photo" immediate :src="media('yulia-portrait-hero.mp4')" type="video/mp4" :poster="media('yulia-portrait.jpg')" label="Юлия Полубелова, тренер по кикбоксингу в Сочи" width="720" height="1280" />
      </div>

      <div class="hero__content" v-motion-slide-visible-once-left>
        <p class="eyebrow">Кикбоксинг в Сочи · Мастер спорта России</p>
        <h1 class="hero-title"><span>Юлия</span><span>Полубелова</span></h1>
        <p class="hero-text">Тренер по кикбоксингу в Сочи. Секция для детей и взрослых. Победительница Всероссийских турниров и Кубка Мира, финалистка Первенства России.</p>
        <div class="hero-actions">
          <a class="btn btn-white magnetic" href="https://t.me/polubelova55" target="_blank">Записаться на пробную</a>
          <a class="btn btn-outline magnetic" href="tel:+79186055806">Позвонить</a>
        </div>
      </div>

      <div class="hero__meta">
        <span>Сочи</span>
        <span>Пробная тренировка по записи</span>
      </div>
    </section>

    <Ticker />

    <section class="section founder-section">
      <div class="section-head sticky-head" v-motion-slide-visible-once-left>
        <p class="eyebrow">О тренере</p>
        <h2>Личный подход. Спокойная сила. Результат.</h2>
      </div>

      <div class="founder-grid" v-motion-slide-visible-once-right>
        <img class="image-card tall" :src="media('yulia-portrait.jpg')" width="768" height="1024" alt="Юлия Полубелова, тренер по кикбоксингу в Сочи" loading="lazy" decoding="async" />
        <div class="quote-card">
          <p class="quote">«Тренировка — это не только техника. Это характер, дисциплина и уверенность в себе».</p>
          <p class="muted">Юлия Полубелова — тренер по кикбоксингу в Сочи, мастер спорта России. Занятия организует спортивная школа.</p>
          <div class="stats">
            <div><b>01</b><span>всероссийские турниры</span></div>
            <div><b>02</b><span>кубок мира</span></div>
            <div><b>03</b><span>первенство россии</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section about-section">
      <SectionTitle eyebrow="Направления" title="Секция кикбоксинга" />
      <div class="cards-3">
        <FeatureCard number="01" title="Пробная тренировка" text="Знакомство с тренером и форматом занятий. Запись в секцию кикбоксинга через Telegram или звонок." />
        <FeatureCard number="02" title="Персонально" text="Максимум внимания: техника кикбоксинга, физика, исправление ошибок, прогресс и личная программа." />
        <FeatureCard number="03" title="Группы (дети / взрослые)" text="Кикбоксинг для детей и взрослых в спокойной атмосфере и с понятной системой обучения." />
      </div>
    </section>

    <section class="section video-section">
      <SectionTitle eyebrow="Видео" title="Как проходят тренировки" />
      <div class="video-grid">
        <LoopVideo :src="media('yulia-training.webm')" :poster="media('yulia-training.jpg')" label="Тренировка по кикбоксингу" width="767" height="1024" />
        <LoopVideo :src="media('yulia-training-2.webm')" :poster="media('yulia-kids-line.jpg')" label="Кикбоксинг для детей в Сочи" width="775" height="1024" />
      </div>
    </section>

    <section class="section gallery-section">
      <SectionTitle eyebrow="Атмосфера" title="Кикбоксинг для детей" />
      <div class="gallery-grid coach-gallery">
        <img class="gallery-big image-card" :src="media('kids-team.jpg')" width="768" height="1024" alt="Детская группа кикбоксинга в Сочи" loading="lazy" decoding="async" />
        <img class="image-card" :src="media('yulia-kids-line.jpg')" width="775" height="1024" alt="Юлия Полубелова с детской группой" loading="lazy" decoding="async" />
        <img class="image-card" :src="media('yulia-training.jpg')" width="767" height="1024" alt="Юлия Полубелова на тренировке по кикбоксингу" loading="lazy" decoding="async" />
        <img class="image-card" :src="media('yulia-competition.jpg')" width="576" height="1024" alt="Юлия Полубелова на тренировке с учеником" loading="lazy" decoding="async" />
        <img class="image-card" :src="media('yulia-students.jpg')" width="743" height="1024" alt="Ученики секции кикбоксинга" loading="lazy" decoding="async" />
      </div>
    </section>

    <section class="section reviews-section">
      <SectionTitle eyebrow="Почему выбирают" title="Тренер по кикбоксингу, который ведет к результату с уверенностью" />
      <div class="cards-3">
        <FeatureCard number="01" title="Безопасность" text="Продуманный тренировочный процесс и понятное объяснение техники кикбоксинга." />
        <FeatureCard number="02" title="Для всех" text="Кикбоксинг для детей, новичков и взрослых, в том числе без спортивного опыта." />
        <FeatureCard number="03" title="Атмосфера" text="Регулярность, дисциплина и сильная командная поддержка на каждом занятии." />
      </div>
    </section>

    <section class="final-cta">
      <div>
        <p class="eyebrow dark">Контакты</p>
        <h2>Запишись на<br />пробную<br />тренировку</h2>
        <p>Кикбоксинг в Сочи · Telegram: @polubelova55 · +7 918 605-58-06</p>
        <div class="hero-actions">
          <a class="btn btn-black magnetic" href="https://t.me/polubelova55" target="_blank">Telegram</a>
          <a class="btn btn-black-outline magnetic" href="tel:+79186055806">Позвонить</a>
        </div>
      </div>
      <img class="image-card cta-image" :src="media('kids-team.jpg')" width="768" height="1024" alt="Детская группа на тренировке по кикбоксингу" loading="lazy" decoding="async" />
    </section>
  </main>
</template>

<script setup>
import Ticker from '../components/Ticker.vue'
import SectionTitle from '../components/SectionTitle.vue'
import FeatureCard from '../components/FeatureCard.vue'
import LoopVideo from '../components/LoopVideo.vue'
import { media } from '../media'
</script>
