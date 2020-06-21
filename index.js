const functions = require('firebase-functions')
const { Nuxt } = require('nuxt-start')

const nuxtConfig = require('./nuxt.config.js')

const config = {
  ...nuxtConfig,
  dev: false,
  buildDir: '__build__'
};
const nuxt = new Nuxt(config)

exports.nuxtssr = functions.https.onRequest(async (req, res) => {
  await nuxt.ready()
  // res.set('Cache-Control', 'public, max-age=1, s-maxage=1')
  await nuxt.render(req, res)
})
