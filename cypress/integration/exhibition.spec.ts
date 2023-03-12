
import * as faker from '@faker-js/faker';
var name:string
var nameExhibition:string
var artwork:string
describe('HU03 - Listar las Exhibiciones', () => {
  it('HU03 - Validar lista de exhibiciones', () => {
    cy.visit('/')
    cy.get('#main > app-nav > nav > div > div.navbar-header > span:nth-child(2)').click()
    cy.contains('Brett Whiteley: Drawing is Everything').click()
  })
})

describe('HU04 - Revisar detalle de la exhibición', () => {
  it('Accede al detalle de una exhibiciones', () => {
    cy.visit('/')
    cy.get('#main > app-nav > nav > div > div.navbar-header > span:nth-child(2)').click()
    cy.contains('Brett Whiteley: Drawing is Everything').click()
    cy.contains('Currents Artworks')
  })
})

describe('HU15 - Crear un Patrocinador', () => {
  it('Se crea un patrocinador', () => {
    cy.visit('/')
    cy.get("button[type='button'][data-bs-toggle='dropdown']").click()
    cy.get("body > app-root:nth-child(1) > app-layout-main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > app-nav:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)").click()
    name = faker.faker.company.companyName()
    cy.get('input[id="name"]').type(name)
    cy.get('input[id="description"]').type(faker.faker.lorem.sentence(14))
    cy.get('input[id="website"]').type(faker.faker.internet.url())
    cy.get('#main > ng-component > app-sponsor-create > div > div > div > div > div > div > div > form > button.btn.btn-dark').click()
    cy.wait(2000)
    cy.get('#main > app-nav > nav > div > div.navbar-header > span:nth-child(2)').click()
    cy.get('#sidebar > app-header > div > ng-component > app-exhibition-list > div > div > div > div > div > div.header > p-button > button').click()
    cy.get('#main > ng-component > app-exhibition-create > div > div > div > div > div > div > div > form > div:nth-child(3) > select').select(name)
  })
})


describe('HU10 - Crear una Exhibición', () => {
  it('Se crea una exhibición', () => {
    cy.visit('/')
    cy.get('#main > app-nav > nav > div > div.navbar-header > span:nth-child(2)').click()
    cy.get("button[type='button'][data-tooltip='Create Exhibition']").click()
    cy.wait(2000)
    nameExhibition = faker.faker.company.companyName()
    cy.get('input[id="name"]').type(nameExhibition)
    cy.get('input[id="description"]').type(faker.faker.lorem.sentence(14))
    cy.get('#main > ng-component > app-exhibition-create > div > div > div > div > div > div > div > form > div:nth-child(3) > select').select(name)
    cy.get('#main > ng-component > app-exhibition-create > div > div > div > div > div > div > div > form > button.btn.btn-dark').click()
    cy.wait(2000)
    cy.visit('/')
    cy.get('#main > app-nav > nav > div > div.navbar-header > span:nth-child(2)').click()
    cy.contains(nameExhibition)
    cy.wait(2000)
  })
})

describe('HU14 - Asociar una Obra de Arte', () => {
  it('Se asocia una obra de arte', () => {
    cy.visit('/')
    cy.get('#main > app-nav > nav > div > div.navbar-header > span:nth-child(2)').click()
    cy.contains('Brett Whiteley: Drawing is Everything').click()
    cy.wait(2000)
//    cy.scrollTo(0, 500)
    cy.get('#main').scrollTo(0, 500)
    cy.wait(2000)
//    cy.contains('Add Artwork')
    cy.get('#main > ng-component > app-exhibition-detail > div > div > div > div > div:nth-child(2) > div.header > p-button > button > span.p-button-label.ng-star-inserted').click()
    cy.get('div.p-overlaypanel').invoke("show")
    cy.get('table.p-datatable-table > tbody > tr:nth-child(1) > td:nth-child(1)').invoke('text').then((text1) => {
      artwork = text1
      cy.log(artwork)
      cy.get('table.p-datatable-table > tbody > tr:nth-child(1)').click({force: true})
      cy.contains(artwork)
      })
  })
})
