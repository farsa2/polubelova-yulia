<template>
  <main class="page">
    <section class="section">
      <SectionTitle eyebrow="Тренировки" title="Индивидуально, дети и взрослые группы" />
      <div class="training-list">
        <TrainingRow title="Пробная тренировка" meta="Start" text="Знакомство с кикбоксингом, тренером и форматом занятий. Запись через Telegram." />
        <TrainingRow title="Индивидуальные тренировки" meta="Personal" text="Персональный фокус на технику кикбоксинга, физическую форму, ошибки и прогресс." />
        <TrainingRow title="Детские группы" meta="Kids" text="Дисциплина, координация, уважение и безопасное освоение кикбоксинга." />
        <TrainingRow title="Взрослые группы" meta="Adults" text="Кикбоксинг для формы, самообороны, техники и спортивного развития." />
      </div>
    </section>
  </main>
</template>

<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import TrainingRow from '../components/TrainingRow.vue'
</script>
