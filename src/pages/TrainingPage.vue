<template>
  <main class="page">
    <section class="section">
      <SectionTitle tag="h1" eyebrow="Тренировки" title="Кикбоксинг для детей и взрослых" />
      <div class="training-list">
        <TrainingRow title="Пробная тренировка" meta="Start" text="Знакомство с секцией кикбоксинга в Сочи, тренером и форматом занятий. Запись через Telegram." />
        <TrainingRow title="Индивидуальные тренировки" meta="Personal" text="Персональный фокус на технику кикбоксинга, физическую форму, ошибки и прогресс." />
        <TrainingRow title="Детские группы" meta="Kids" text="Единоборства для детей: дисциплина, координация и безопасное освоение кикбоксинга." />
        <TrainingRow title="Взрослые группы" meta="Adults" text="Кикбоксинг для взрослых: форма, техника и спортивное развитие." />
      </div>
    </section>
  </main>
</template>

<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import TrainingRow from '../components/TrainingRow.vue'
</script>
