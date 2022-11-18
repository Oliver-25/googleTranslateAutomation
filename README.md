## How to install
* make sure you have the latest version of Node.js installed (type "node -v" into terminal to check)
* clone mirror from github
* cd ../projectPath
* run command: `npm install --save-dev`

## To run on specific environment via command line or editor which supports scripts (e.g. Visual Studio Code)
* `npm run qa`
* `npm run prod`

## To run via Cypress UI on qa env
* `npx cypress open --env configFile=qa`

## To run via Cypress UI on prod env
* `npx cypress open --env configFile=prod`

## To run in terminal on qa env
* `npx cypress run --env configFile=qa`

## To run in terminal on prod env
* `npx cypress open --env configFile=prod`

## Append optional commands to the aforementioned, to:
* run in specific browser: `--browser + browser_name, e.g. chrome, electron (default), edge, firefox etc.`
* run headed: `--headed`
* run headless: `--headless`
* prevent Cypress Test Runner from exiting after running tests: `--no-exit`

## Project structure
* Test file is located at /cypress/e2e
* Custom command for language selection is located at cypress/support/commands.js
* Test configuraiton can be found at googleTranslateAutomation/cypress.config.js
* Two congfig files for different environments can be found at googleTranslateAutomation/${env_name}.json
* Custom scripts for test runs are defined at googleTranslateAutomation/package.json
* Test reports are being saved to googleTranslateAutomation/test-reports
* You need to run the tests with 'npx cypress run...' command in order for report to be generated
* When test fails, screenshot is being saved to googleTranslateAutomation/test-reports/screenshots/${testfilename}
* Screenshot are also included in test reports