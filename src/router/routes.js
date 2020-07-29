
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/settings', component: () => import('pages/Settings.vue') },
      { path: '/recent', component: () => import('pages/Recent.vue') },
      { path: '/analytics', component: () => import('pages/Analytics.vue') },
      { path: '/settings/about', component: () => import('pages/About.vue') },
      { path: '/settings/first-day', component: () => import('pages/FirstDay.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
