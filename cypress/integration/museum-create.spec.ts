import * as faker from "@faker-js/faker";

let name:string = "Museum " + faker.faker.company.companyName()
let description:string = faker.faker.lorem.text()
let address:string = faker.faker.address.direction()
let city:string = faker.faker.address.cityName()
let image:string = faker.faker.image.imageUrl()

describe('Create a museum', () => {
  beforeEach(()=>{
    cy.visit('/')
    cy.wait(500)
    cy.get('span.navbar-brand:nth-child(1)').click()
  })
  it('Should create a new museum', () => {
    cy.get(".btn.btn-secundary.btn-circle.btn-xl").click()
    cy.get('input[formcontrolname="name"]').type(name)
    cy.get('input[formcontrolname="description"]').type(description)
    cy.get('input[formcontrolname="address"]').type(address)
    cy.get('input[formcontrolname="city"]').type(city)
    cy.get('input[formcontrolname="image"]').type(image)
    cy.get("button[type='submit']").click()
    cy.wait(1000)
    cy.visit('/')
    cy.get('span.navbar-brand:nth-child(1)').click()
  });
});
