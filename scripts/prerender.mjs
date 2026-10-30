import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { getPage, headHtml, publicPaths, robotsTxt, siteOrigin, sitemapXml } from '../src/seo.js'

const root = process.cwd()
const dist = path.join(root, 'dist')

function readEnvFile() {
  const file = path.join(root, '.env')
  if (!fs.existsSync(file)) return
  for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    const key = trimmed.slice(0, eq).trim()
    let value = trimmed.slice(eq + 1).trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    if (process.env[key] === undefined) process.env[key] = value
  }
}

readEnvFile()

const origin = siteOrigin(process.env.VITE_SITE_URL)
const base = process.env.GITHUB_PAGES_BASE || '/'
const yandex = process.env.VITE_YANDEX_VERIFICATION || ''
const google = process.env.VITE_GOOGLE_VERIFICATION || ''
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const serverEntry = pathToFileURL(path.join(root, '.ssr', 'entry-server.js')).href
const { render } = await import(serverEntry)

function inject(html, page) {
  const head = headHtml({ origin, yandex, google, page, base })
  return html.replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, `<!--seo:start-->\n    ${head}\n    <!--seo:end-->`)
}

for (const route of publicPaths) {
  const page = getPage(route)
  const appHtml = await render(route)
  const html = inject(template, page).replace('<div id="app"></div>', `<div id="app">${appHtml}</div>`)
  const file = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.slice(1), 'index.html')
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, html)
  console.log('prerender', route)
}

fs.writeFileSync(path.join(dist, 'robots.txt'), robotsTxt(origin))
if (origin) {
  fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemapXml(origin))
  console.log('sitemap', `${origin}/sitemap.xml`)
} else {
  console.log('sitemap skipped: set VITE_SITE_URL and rebuild')
}
