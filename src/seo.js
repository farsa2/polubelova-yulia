const pages = {
  '/': {
    path: '/',
    title: 'Кикбоксинг в Сочи — Юлия Полубелова',
    description:
      'Кикбоксинг в Сочи с Юлией Полубеловой, мастером спорта России. Секция для детей и взрослых, пробная тренировка. Занятия организует спортивная школа.',
    crumb: 'Главная',
    preload: '/media/yulia-portrait.jpg',
  },
  '/about': {
    path: '/about',
    title: 'Юлия Полубелова — тренер по кикбоксингу в Сочи',
    description:
      'Юлия Полубелова — тренер по кикбоксингу в Сочи, мастер спорта России. Победительница Всероссийских турниров и Кубка Мира. Секция для детей и взрослых.',
    crumb: 'О тренере',
    preload: '/media/yulia-portrait.jpg',
  },
  '/training': {
    path: '/training',
    title: 'Кикбоксинг для детей и взрослых в Сочи',
    description:
      'Секция кикбоксинга в Сочи: группы для детей, взрослые и персональные тренировки. Единоборства для детей в спокойном формате. Запись на пробное занятие.',
    crumb: 'Тренировки',
  },
  '/gallery': {
    path: '/gallery',
    title: 'Галерея — кикбоксинг в Сочи',
    description:
      'Фото и видео тренировок по кикбоксингу в Сочи: детские группы, техника и атмосфера секции Юлии Полубеловой.',
    crumb: 'Галерея',
  },
  '/contacts': {
    path: '/contacts',
    title: 'Запись на кикбоксинг в Сочи',
    description:
      'Запись на пробную тренировку по кикбоксингу в Сочи. Telegram @Nikita_Chapligin, телефон +7 962 006-27-26. Занятия организует спортивная школа.',
    crumb: 'Контакты',
    preload: '/media/yulia-portrait.jpg',
  },
  '/legal': {
    path: '/legal',
    title: 'Правовая информация — Юлия Полубелова',
    description: 'Правовая информация сайта тренера по кикбоксингу Юлии Полубеловой. Сочи.',
    crumb: 'Правовая информация',
  },
  '/privacy': {
    path: '/privacy',
    title: 'Политика обработки персональных данных — Юлия Полубелова',
    description: 'Политика обработки персональных данных сайта Юлии Полубеловой, тренера по кикбоксингу в Сочи.',
    crumb: 'Политика обработки персональных данных',
  },
}

export const publicPaths = Object.keys(pages)

export function siteOrigin(value) {
  return String(value || '').trim().replace(/\/$/, '')
}

export function getPage(path) {
  const normalized = path.length > 1 ? path.replace(/\/$/, '') : path
  return pages[normalized] || null
}

function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

function meta(attr, key, content) {
  return `<meta data-seo ${attr}="${esc(key)}" content="${esc(content)}">`
}

function joinUrl(origin, assetPath) {
  if (!origin) return ''
  return `${origin.replace(/\/$/, '')}/${String(assetPath).replace(/^\//, '')}`
}

function withBase(base, assetPath) {
  const root = String(base || '/').endsWith('/') ? String(base || '/') : `${base}/`
  return `${root}${String(assetPath).replace(/^\//, '')}`
}

function pageUrl(origin, path) {
  if (!origin) return ''
  const root = origin.replace(/\/$/, '')
  return path === '/' ? `${root}/` : `${root}${path}`
}

function schema({ origin, page }) {
  const url = pageUrl(origin, page.path)
  const image = joinUrl(origin, '/media/yulia-portrait.jpg')
  const personId = origin ? `${origin}/#person` : '#person'
  const graph = [
    {
      '@type': 'WebPage',
      url: url || undefined,
      name: page.title,
      description: page.description,
      inLanguage: 'ru-RU',
      isPartOf: origin ? { '@id': `${origin}/#website` } : undefined,
      about: { '@id': personId },
    },
    {
      '@type': 'WebSite',
      '@id': origin ? `${origin}/#website` : '#website',
      url: origin || undefined,
      name: 'Юлия Полубелова — кикбоксинг в Сочи',
      inLanguage: 'ru-RU',
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: 'Юлия Полубелова',
      jobTitle: 'Тренер по кикбоксингу',
      description: 'Мастер спорта России. Тренер секции кикбоксинга для детей и взрослых в Сочи.',
      telephone: '+7-962-006-27-26',
      url: origin || undefined,
      image: image || undefined,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Сочи',
        addressCountry: 'RU',
      },
      sameAs: ['https://t.me/Nikita_Chapligin'],
      knowsAbout: ['Кикбоксинг', 'Кикбоксинг для детей', 'Кикбоксинг для взрослых'],
    },
    {
      '@type': 'Service',
      name: 'Кикбоксинг в Сочи',
      serviceType: 'Секция кикбоксинга',
      provider: { '@id': personId },
      areaServed: { '@type': 'City', 'name': 'Сочи' },
      audience: { '@type': 'PeopleAudience', audienceType: 'Дети и взрослые' },
      description:
        'Секция кикбоксинга в Сочи для детей и взрослых. Занятия организует спортивная школа.',
    },
  ]

  if (page.path !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Главная',
          item: origin ? `${origin}/` : '/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: page.crumb,
          item: url || page.path,
        },
      ],
    })
  }

  return { '@context': 'https://schema.org', '@graph': stripEmpty(graph) }
}

function stripEmpty(value) {
  if (Array.isArray(value)) return value.map(stripEmpty)
  if (!value || typeof value !== 'object') return value
  return Object.fromEntries(
    Object.entries(value)
      .filter(([, item]) => item !== undefined && item !== '')
      .map(([key, item]) => [key, stripEmpty(item)]),
  )
}

export function headHtml({ origin, yandex = '', google = '', page, base = '/' }) {
  const url = pageUrl(origin, page.path)
  const image = joinUrl(origin, '/media/yulia-portrait.jpg')
  const tags = [
    `<title>${esc(page.title)}</title>`,
    meta('name', 'description', page.description),
    meta('name', 'robots', 'index, follow, max-image-preview:large'),
    meta('name', 'author', 'Юлия Полубелова'),
    meta('name', 'geo.placename', 'Сочи'),
    meta('name', 'geo.region', 'RU-KDA'),
  ]

  if (yandex) tags.push(meta('name', 'yandex-verification', yandex))
  if (google) tags.push(meta('name', 'google-site-verification', google))
  if (url) tags.push(`<link data-seo rel="canonical" href="${esc(url)}">`)

  tags.push(
    meta('property', 'og:type', 'website'),
    meta('property', 'og:locale', 'ru_RU'),
    meta('property', 'og:site_name', 'Юлия Полубелова'),
    meta('property', 'og:title', page.title),
    meta('property', 'og:description', page.description),
  )
  if (url) tags.push(meta('property', 'og:url', url))
  if (image) {
    tags.push(meta('property', 'og:image', image))
    tags.push(meta('property', 'og:image:alt', 'Юлия Полубелова — кикбоксинг в Сочи'))
  }

  tags.push(
    meta('name', 'twitter:card', image ? 'summary_large_image' : 'summary'),
    meta('name', 'twitter:title', page.title),
    meta('name', 'twitter:description', page.description),
  )
  if (image) tags.push(meta('name', 'twitter:image', image))
  if (page.preload) {
    tags.push(`<link data-seo rel="preload" as="image" href="${esc(withBase(base, page.preload))}" fetchpriority="high">`)
  }

  const json = JSON.stringify(schema({ origin, page })).replace(/</g, '\\u003c')
  tags.push(`<script data-seo type="application/ld+json">${json}</script>`)
  return tags.join('\n    ')
}

export function applyDocumentHead(options) {
  if (typeof document === 'undefined') return
  document.title = options.page.title
  document.head.querySelectorAll('[data-seo]').forEach((node) => node.remove())
  const template = document.createElement('template')
  template.innerHTML = headHtml(options).replace(/<title>[\s\S]*?<\/title>/, '')
  document.head.append(template.content)
}

export function sitemapXml(origin) {
  const lastmod = new Date().toISOString().slice(0, 10)
  const urls = publicPaths.map((path) => {
    const loc = pageUrl(origin, path)
    const priority = path === '/' ? '1.0' : path === '/training' ? '0.9' : path === '/legal' || path === '/privacy' ? '0.2' : '0.7'
    return `  <url><loc>${esc(loc)}</loc><lastmod>${lastmod}</lastmod><changefreq>${path === '/' ? 'weekly' : 'monthly'}</changefreq><priority>${priority}</priority></url>`
  })
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
}

export function robotsTxt(origin) {
  const lines = ['User-agent: *', 'Allow: /', '']
  if (origin) lines.push(`Sitemap: ${origin}/sitemap.xml`, '')
  return lines.join('\n')
}
