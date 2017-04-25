require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Yooshopper',
    description: 'Dedicated to Yooshopper team.',
    head: {
      titleTemplate: 'React Redux App By Gautam: %s',
      meta: [
        {name: 'description', content: 'Dedicated to Yooshopper team.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'React Redux Example'},
        {property: 'og:image', content: 'http://www.yooshopper.com/static/img/new-home/mb-cart.png'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'React Redux Example'},
        {property: 'og:description', content: 'Dedicated to Yooshopper team.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@gautamv16'},
        {property: 'og:creator', content: '@gautamv16'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
