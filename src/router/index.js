import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import TrainingPage from '../pages/TrainingPage.vue'
import GalleryPage from '../pages/GalleryPage.vue'
import ContactsPage from '../pages/ContactsPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/about', name: 'about', component: AboutPage },
  { path: '/training', name: 'training', component: TrainingPage },
  { path: '/gallery', name: 'gallery', component: GalleryPage },
  { path: '/contacts', name: 'contacts', component: ContactsPage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})
