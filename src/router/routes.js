
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
      { path: '/settings/budget', component: () => import('pages/Budget.vue') },
      { path: '/settings/budget/period', component: () => import('pages/Period.vue') },
      { path: '/settings/budget/budget-amount', component: () => import('pages/BudgetAmount.vue') },
      { path: '/settings/dark-mode', component: () => import('pages/DarkMode.vue') },
      { path: '/settings/language-and-currency', component: () => import('pages/LanguageAndCurrency.vue') },
      { path: '/settings/categories', component: () => import('pages/Categories.vue') },
      { path: '/settings/categories/create-category', component: () => import('pages/CreateCategory.vue') },
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
