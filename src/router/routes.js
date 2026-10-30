import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import TrainingPage from '../pages/TrainingPage.vue'
import GalleryPage from '../pages/GalleryPage.vue'
import ContactsPage from '../pages/ContactsPage.vue'
import LegalPage from '../pages/LegalPage.vue'
import PrivacyPage from '../pages/PrivacyPage.vue'

export const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/about', name: 'about', component: AboutPage },
  { path: '/training', name: 'training', component: TrainingPage },
  { path: '/gallery', name: 'gallery', component: GalleryPage },
  { path: '/contacts', name: 'contacts', component: ContactsPage },
  { path: '/legal', name: 'legal', component: LegalPage },
  { path: '/privacy', name: 'privacy', component: PrivacyPage },
]
