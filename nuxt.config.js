module.exports = {
  head: {
    titleTemplate: 'Hello world - Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ],
     link: [
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Kanit' }
    ]
  },
  css: [
    'bulma/css/bulma.css',
    '~/css/main.css'
  ],
}