export function media(file) {
  const base = import.meta.env.BASE_URL || '/'
  const root = base.endsWith('/') ? base : `${base}/`
  return `${root}media/${String(file).replace(/^\/?(media\/)?/, '')}`
}
