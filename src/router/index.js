import { createRouter, createWebHistory } from 'vue-router'
import { applyDocumentHead, getPage, siteOrigin } from '../seo'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

const headOptions = {
  origin: siteOrigin(import.meta.env.VITE_SITE_URL),
  base: import.meta.env.BASE_URL,
  yandex: import.meta.env.VITE_YANDEX_VERIFICATION || '',
  google: import.meta.env.VITE_GOOGLE_VERIFICATION || '',
}

router.afterEach((to) => {
  const page = getPage(to.path)
  if (!page) return
  applyDocumentHead({ ...headOptions, page })
})

export default router
