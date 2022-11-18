const keysToTranslate = ['mačka', 'jazyk', 'reč', 'bytie', 'veda', 'hudba', 'krása', 'radosť', 'boh', 'nič']
const correctTranslationDe = ['Katze', 'Sprache', 'Rede', 'Sein', 'Wissenschaft', 'Musik', 'Schönheit', 'Freude', 'Gott', 'nichts']
const correctTranslationEn = ['cat', 'language', 'speech', 'being', 'science', 'music', 'beauty', 'joy', 'God', 'nothing']
let translationsDe = []
let translationsEn = []

describe('Google translate test suite', () => {

  beforeEach('exceptions handling', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
      })
  })

  it('Translate from Slovak to German', () => {
    //Navigate to AUT with languages selected
    cy.selectLanguages('sk', 'de')
    //get and click accept cookies button
    cy.get('button').contains('Accept all')
    .click({force:true}).then(() => {
      //unauthorised access (403) workaround
      cy.reload()
    })
    //translate to german and populate the array
    for(let i = 0; i < keysToTranslate.length; i++){
        cy.get('textarea.er8xn').type(keysToTranslate[i])
        cy.get('.ryNqvb').invoke('text').then((text) => {
            translationsDe.push(text)
        cy.get('textarea.er8xn').clear()
        })
    }
    //wrap the final results in order for assertion to be evaluated at the end
    cy.wrap(correctTranslationDe).then((translations) => {
        //verify that translations are correct
        expect(translations).to.deep.equal(translationsDe)
    })
  })

  it('Translate from Slovak to English', () => {
    //Navigate to AUT
    cy.selectLanguages('sk', 'en')
    //get and click accept all button
    cy.get('button').contains('Accept all')
    .click({force:true}).then(() => {
        //unauthorised access (403) workaround
        cy.reload()
    })
    //translate to english and populate the array
    for(let i = 0; i < keysToTranslate.length; i++){
        cy.get('textarea.er8xn').type(keysToTranslate[i])
        cy.get('.ryNqvb').invoke('text').then((text) => {
            translationsEn.push(text)
        cy.get('textarea.er8xn').clear()
        })
    }
    //wrap the final results in order for assertion to be evaluated at the end
    cy.wrap(correctTranslationEn).then((translations) => {
        //verify that translations are correct
        expect(translations).to.deep.equal(translationsEn)
    })
  })
})