<template>
  <main>
    <section class="hero coach-hero">
      <div class="noise"></div>
      <div class="hero__media" v-motion-slide-visible-once-right>
        <video class="hero-photo" src="/media/yulia-portrait.mp4" autoplay muted loop playsinline></video>
      </div>

      <div class="hero__content" v-motion-slide-visible-once-left>
        <p class="eyebrow">Сочи · Кикбоксинг · Мастер спорта России</p>
        <h1 class="hero-title"><span>Юлия</span><span>Полубелова</span></h1>
        <p class="hero-text">Тренер по кикбоксингу. Победительница Всероссийских турниров и Кубка Мира. Финалистка Первенства России. Многократная победительница краевых и Южно-федеральных турниров.</p>
        <div class="hero-actions">
          <a class="btn btn-white magnetic" href="https://t.me/Nikita_Chapligin" target="_blank">Записаться на пробную</a>
          <a class="btn btn-outline magnetic" href="tel:+79620062726">Позвонить</a>
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
        <img class="image-card tall" src="/media/yulia-portrait.jpg" alt="Портрет Юлии Полубеловой" />
        <div class="quote-card">
          <p class="quote">«Тренировка — это не только техника. Это характер, дисциплина и уверенность в себе».</p>
          <p class="muted">Юлия Полубелова — тренер по кикбоксингу, мастер спорта России с результатами на всероссийском и международном уровне.</p>
          <div class="stats">
            <div><b>01</b><span>всероссийские турниры</span></div>
            <div><b>02</b><span>кубок мира</span></div>
            <div><b>03</b><span>первенство россии</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section about-section">
      <SectionTitle eyebrow="Направления" title="Тренировки по кикбоксингу" />
      <div class="cards-3">
        <FeatureCard number="01" title="Пробная тренировка" text="Знакомство с тренером, залом и форматом занятий по кикбоксингу. Запись через Telegram или звонок." />
        <FeatureCard number="02" title="Персонально" text="Максимум внимания: техника кикбоксинга, физика, исправление ошибок, прогресс и личная программа." />
        <FeatureCard number="03" title="Группы (дети / взрослые)" text="Тренировки для детей и взрослых в комфортной атмосфере с понятной системой обучения." />
      </div>
    </section>

    <section class="section video-section">
      <SectionTitle eyebrow="Видео" title="Как проходят тренировки" />
      <div class="video-grid">
        <video src="/media/yulia-training.webm" autoplay muted loop playsinline></video>
        <video src="/media/yulia-training-2.webm" autoplay muted loop playsinline></video>
      </div>
    </section>

    <section class="section gallery-section">
      <SectionTitle eyebrow="Атмосфера" title="Дети, команда и результат" />
      <div class="gallery-grid coach-gallery">
        <img class="gallery-big image-card" src="/media/kids-team.jpg" alt="Тренировочная атмосфера" />
        <img class="image-card" src="/media/yulia-kids-line.jpg" alt="Юлия Полубелова с детской группой" />
        <img class="image-card" src="/media/yulia-training.jpg" alt="Юлия Полубелова на тренировке" />
        <img class="image-card" src="/media/yulia-competition.jpg" alt="Юлия Полубелова на тренировке с учеником" />
        <img class="image-card" src="/media/yulia-students.jpg" alt="Ученики Kickboxing Academy Sochi" />
      </div>
    </section>

    <section class="section reviews-section">
      <SectionTitle eyebrow="Почему выбирают" title="Тренер по кикбоксингу, который ведет к результату с уверенностью" />
      <div class="cards-3">
        <FeatureCard number="01" title="Безопасность" text="Продуманный тренировочный процесс и понятное объяснение техники кикбоксинга." />
        <FeatureCard number="02" title="Для всех" text="Подходит детям, новичкам и взрослым без любого спортивного опыта." />
        <FeatureCard number="03" title="Атмосфера" text="Регулярность, дисциплина и сильная командная поддержка на каждом занятии." />
      </div>
    </section>

    <section class="final-cta">
      <div>
        <p class="eyebrow dark">Контакты</p>
        <h2>Запишись на<br />пробную<br />тренировку</h2>
        <p>Telegram: @Nikita_Chapligin · Телефон: +7 962 006-27-26 · Сочи</p>
        <div class="hero-actions">
          <a class="btn btn-black magnetic" href="https://t.me/Nikita_Chapligin" target="_blank">Telegram</a>
          <a class="btn btn-black-outline magnetic" href="tel:+79620062726">Позвонить</a>
          <a class="btn btn-black-outline magnetic" href="https://www.instagram.com/nikita__chapligin/" target="_blank">Instagram</a>
        </div>
      </div>
      <img class="image-card cta-image" src="/media/kids-team.jpg" alt="Команда учеников" />
    </section>
  </main>
</template>

<script setup>
import Ticker from '../components/Ticker.vue'
import SectionTitle from '../components/SectionTitle.vue'
import FeatureCard from '../components/FeatureCard.vue'
</script>
