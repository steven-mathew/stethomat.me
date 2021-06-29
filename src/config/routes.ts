import { extendSEO, defaultSEO } from './seo'

// TODO: add meta icons

// TODO: cleanup unneeded routes
const routes = {
  home: {
    label: 'Home',
    path: '/',
    seo: defaultSEO,
  },
  about: {
    label: 'About',
    path: '/about',
    seo: extendSEO({
      title: 'About',
      url: 'about',
    }),
  },
  projects: {
    label: 'Projects',
    path: '/projects',
    seo: extendSEO({
      title: 'Projects',
      description: 'What I’m working on.',
      url: 'projects',
    }),
  },
  shame: {
    label: 'Hall of Shame',
    path: '/shame',
    seo: extendSEO({
      title: 'Hall of Shame',
      description: 'Shaming the unfunny.',
      url: 'shame',
    }),
  },
}

export default routes
