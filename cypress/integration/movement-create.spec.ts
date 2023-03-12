import * as faker from "@faker-js/faker";

let name:string = faker.faker.lorem.sentence()
let description:string = faker.faker.lorem.text()
let country:string = faker.faker.address.direction()
let years:string = faker.faker.address.cityName()

describe('Create a movement', () => {
  beforeEach(()=>{
    cy.visit('/')
    cy.wait(500)
    cy.get("button[type='button'][data-bs-toggle='dropdown']").click()
    cy.get("body > app-root:nth-child(1) > app-layout-main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > app-nav:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(5) > a:nth-child(1)").click()
  })
  it('Should create a new movement', () => {
    cy.get('input[formcontrolname="name"]').type(name)
    cy.get('input[formcontrolname="description"]').type(description)
    cy.get('input[formcontrolname="countryOfOrigin"]').type(country)
    cy.get('input[formcontrolname="activeYears"]').type(years)
    cy.get("button[type='submit']").click()
    cy.wait(2000)
    cy.visit('/')
  });
});
