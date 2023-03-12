import * as faker from "@faker-js/faker";

let name:string = faker.faker.name.firstName()
let description:string = faker.faker.lorem.text()
let birthplace:string = faker.faker.company.companyName()
let birthdate:string = faker.faker.datatype.datetime().getDate().toString()
let image:string = faker.faker.image.imageUrl()

describe('Create a artist', () => {
  beforeEach(()=>{
    cy.visit('/')
    cy.wait(500)
    cy.get('span.navbar-brand:nth-child(4)').click()
  })
  it('Should create a new artist', () => {
    cy.get(".btn.btn-secundary.btn-circle.btn-xl").click()
    cy.get('input[formcontrolname="name"]').type(name)
    cy.get('input[formcontrolname="description"]').type(description)
    cy.get('input[formcontrolname="birthplace"]').type(birthplace)
    cy.get('input[formcontrolname="birthdate"]').type(birthdate)
    cy.get('input[formcontrolname="image"]').type(image)
    cy.get("button[type='submit']").click()
    cy.wait(1000)
    cy.visit('/')
    cy.get('span.navbar-brand:nth-child(1)').click()
  });
});


