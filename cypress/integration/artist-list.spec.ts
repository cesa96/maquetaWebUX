describe('List artists', () => {
  beforeEach(()=>{
    cy.visit('/')
    cy.wait(500)
    cy.get('#main > app-nav > nav > div > div.navbar-header > span:nth-child(4)').click()
  })
  it('Should be listed the artist 1', () => {
    cy.get(':nth-child(1) > .list-group-item').then(($link)=>{
      expect($link[0].innerText).to.equal('Brett Whiteley')
    })
  });

  it('Should be listed the artist 2', () => {
    cy.get(':nth-child(2) > .list-group-item').then(($link)=>{
      expect($link[0].innerText).to.equal('Grace Cossington Smith')
    })
  });

  it('Should be listed the artist 3', () => {
    cy.get(':nth-child(3) > .list-group-item').then(($link)=>{
      expect($link[0].innerText).to.equal('Tate David Bomberg')
    })
  });
});




