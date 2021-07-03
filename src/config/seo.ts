// Inspired heavily by https://github.com/brianlovin/brian-lovin-next/blob/main/src/config/seo.ts 

export const baseUrl = 'https://stethomat.me'
export const baseEmail = 'ste.tho.mat@gmail.com'

export const defaultSEO = {
  title: 'Steven Mathew',
  description:
    'Developer with \"three\" first names and a single \"t\". I\'m Steven Thomas Mathew and why don\'t you stop by.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    site_name: 'Steven Mathew',
    images: [
      {
        url: `${baseUrl}/static/meta/og-image.png`,
        alt: 'Steven Mathew',
      },
    ],
  },
}

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export function extendSEO(options: SEOProps) {
  const images = options.image
    ? [{ url: `${baseUrl}/static/${options.image}` }]
    : defaultSEO.openGraph.images

  return {
    ...defaultSEO,
    ...options,
    url: `${baseUrl}/${options.url}`,
    openGraph: {
      ...defaultSEO.openGraph,
      images,
      url: `${baseUrl}/${options.url}`,
    },
  }
}

