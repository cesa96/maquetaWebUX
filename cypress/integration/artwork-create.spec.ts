import * as faker from "@faker-js/faker";

let name:string = faker.faker.name.firstName()
let description:string = faker.faker.lorem.text()
let year:number = faker.faker.datatype.number()


describe('Create a artwork', () => {
  beforeEach(()=>{
    cy.visit('/')
    cy.wait(500)
    cy.get('span.navbar-brand:nth-child(3)').click()
  })
  it('Should create a new artwork', () => {
    cy.get(".btn.btn-secundary.btn-circle.btn-xl").click()
    cy.get('input[formcontrolname="name"]').type(name)
    cy.get('input[formcontrolname="description"]').type(description)
    cy.get('input[formcontrolname="birthplace"]').type(year.toString())
    cy.get('select').select('Painting').should('have.value', '1')
    cy.get('select').select('Brett Whiteley').should('have.value', '100')
    cy.get("button[type='submit']").click()
    cy.wait(1000)
    cy.visit('/')
    cy.get('span.navbar-brand:nth-child(1)').click()
  });
});
