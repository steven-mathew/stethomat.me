// Inspired heavily by https://github.com/brianlovin/brian-lovin-next/blob/main/src/config/seo.ts 

export const baseUrl = 'https://read.me'
export const baseEmail = 'hi@read.me'

export const defaultSEO = {
  title: 'readme',
  description:
    'A space for your work.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    site_name: 'readme',
    images: [
      {
        // url: `${baseUrl}/static/meta/og-image.png`,
        alt: 'readme',
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

