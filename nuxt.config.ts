export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
      '@pinia/nuxt',
      '@nuxt/eslint',
      '@ant-design-vue/nuxt',
      '@vueuse/nuxt',
      'nuxt-swiper'
    ],
    css: [
        '@/assets/css/style.css',
    ],
    ssr: true,
    nitro: {
        preset: 'static'
    },
    app: {
        baseURL: '/'
    },
    routeRules: {
        '/': { static: true },
        '/about': { static: true },
        '/blog/**': { static: true }
    },
    components: [
        { path: '~/components/modules/home-page', prefix: 'Home' },
        { path: '~/components/ui', prefix: 'ui' },
        { path: '~/components/widgets', pathPrefix: false },
        { path: '~/components/modules/common', pathPrefix: false},
    ],
});