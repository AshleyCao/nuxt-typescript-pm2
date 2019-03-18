const pkg = require('./package');

export default {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: [{src:'~assets/global.scss', lang: 'scss'}],
  plugins : [
    '~plugins/vuelidate.ts',
    '~plugins/element-ui.ts',
    '~plugins/bootstrap-vue.js',
    { src: '~/plugins/localstorage.ts', ssr: false }
  ], 
  modules : [
    '@nuxtjs/axios'
  ]
};
