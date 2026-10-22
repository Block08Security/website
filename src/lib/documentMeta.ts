import { useEffect } from 'react'

export type DocumentMeta = {
  title: string
  description: string
  canonical: string
  ogType?: string
}

const upsertMeta = (attr: 'name' | 'property', key: string, value: string): HTMLMetaElement => {
  const selector = `meta[${attr}="${key}"]`
  const existing = document.head.querySelector<HTMLMetaElement>(selector)
  if (existing) {
    existing.setAttribute('content', value)
    return existing
  }
  const tag = document.createElement('meta')
  tag.setAttribute(attr, key)
  tag.setAttribute('content', value)
  document.head.appendChild(tag)
  return tag
}

const upsertLink = (rel: string, href: string): HTMLLinkElement => {
  const existing = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (existing) {
    existing.setAttribute('href', href)
    return existing
  }
  const tag = document.createElement('link')
  tag.setAttribute('rel', rel)
  tag.setAttribute('href', href)
  document.head.appendChild(tag)
  return tag
}

export const useDocumentMeta = ({ title, description, canonical, ogType = 'article' }: DocumentMeta) => {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'title', title)
    upsertMeta('property', 'og:type', ogType)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'twitter:title', title)
    upsertMeta('property', 'twitter:description', description)
    upsertMeta('property', 'twitter:url', canonical)
    upsertLink('canonical', canonical)

    return () => {
      document.title = previousTitle
    }
  }, [title, description, canonical, ogType])
}
