describe('Show artwork details', () => {
  beforeEach(()=>{
    cy.visit('/')
    cy.wait(500)
    cy.get('#main > app-nav > nav > div > div.navbar-header > span:nth-child(4)').click()
  })
  it('Should exists details for artwork 1', () => {
    cy.contains("Dogs").click()
    cy.get('h1').then(($header)=>{
      expect($header[0].innerText).to.equal('Dogs')
    })
    cy.get('.img-thumbnail').click()
      .should('have.attr', 'alt', 'Dogs')
  });
});
