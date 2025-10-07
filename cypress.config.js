const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://v0-web-automation-with-cypress.vercel.app',
    viewportWidth: 1280,
    viewportHeight: 720,
    supportFile: false,
  },
})