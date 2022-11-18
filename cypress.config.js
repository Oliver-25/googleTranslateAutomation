const { defineConfig } = require("cypress");
const path = require('path');
const fs = require('fs-extra');
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'test-reports',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    overwrite: false
  },
  // no need to re-define timeout for this one, just for demonstration: 
  //defaultCommandTimeout: 6000,
  screenshotsFolder: 'test-reports/screenshots',
  video: false,
  trashAssetsBeforeRuns: false,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      function getConfigurationByFile(file) {
        const pathToConfigFile = path.resolve(`./${file}.json`);
      
        return fs.readJson(pathToConfigFile);
      }
      const file = config.env.configFile
      return getConfigurationByFile(file)
    }
  }
});
