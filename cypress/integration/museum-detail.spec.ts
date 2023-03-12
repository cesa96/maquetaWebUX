describe('Show museums details', () => {
  beforeEach(()=>{
    cy.visit('/')
    cy.wait(500)
    cy.get('#main > app-nav > nav > div > div.navbar-header > span:nth-child(1)').click()
  })
  it('Should exists details for museum 1', () => {
    cy.contains("Bendigo Art Gallery").click()
    cy.get('h1').then(($header)=>{
      expect($header[0].innerText).to.equal('Bendigo Art Gallery')
    })
    cy.get('.img-thumbnail').click()
      .should('have.attr', 'alt', 'Bendigo Art Gallery')
  });
});
