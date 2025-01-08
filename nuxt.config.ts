// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: ['@nuxt/ui', 'nuxt-echarts'],
  // echarts: {
  //   renderer: ['svg', 'canvas'],
  //   charts: ['BarChart', 'LineChart', 'PieChart'],
  //   components: ['DatasetComponent', 'GridComponent', 'TooltipComponent'],
  //   features: ['LabelLayout', 'UniversalTransition'],
  // }

  vite: {
    ssr: {
      noExternal: ['qr-code-styling']
    }
  }
})