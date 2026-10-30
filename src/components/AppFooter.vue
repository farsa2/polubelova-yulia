<template>
  <footer class="site-footer">
    <div class="site-footer__top">
      <div>
        <p class="site-footer__name">Юлия Полубелова</p>
        <p class="site-footer__meta">© {{ year }} · Тренер по кикбоксингу · Сочи</p>
      </div>
      <nav class="site-footer__legal" aria-label="Правовая информация">
        <RouterLink to="/legal">Правовая информация</RouterLink>
        <RouterLink to="/privacy">Политика обработки персональных данных</RouterLink>
      </nav>
    </div>
    <p class="site-footer__note">Персональный информационный сайт тренера. Занятия организует спортивная школа.</p>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
