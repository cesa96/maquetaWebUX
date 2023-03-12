describe('Show artist details', () => {
  beforeEach(()=>{
    cy.visit('/')
    cy.wait(500)
    cy.get('#main > app-nav > nav > div > div.navbar-header > span:nth-child(4)').click()
  })
  it('Should exists details for artist 1', () => {
    cy.contains("Brett Whiteley").click()
    cy.get('h1').then(($header)=>{
      expect($header[0].innerText).to.equal('Brett Whiteley')
    })
    cy.get('.img-thumbnail').click()
      .should('have.attr', 'alt', 'Brett Whiteley')
  });
});
