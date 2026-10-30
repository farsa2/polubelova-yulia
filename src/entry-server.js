import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue'
import { routes } from './router/routes'

const motionDirectives = [
  'motion-slide-visible-once-right',
  'motion-slide-visible-once-left',
  'motion-slide-visible-once-bottom',
]

export async function render(url) {
  const app = createSSRApp(App)
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

  for (const name of motionDirectives) {
    app.directive(name, { getSSRProps: () => ({}) })
  }

  app.use(router)
  await router.push(url)
  await router.isReady()
  return renderToString(app)
}
