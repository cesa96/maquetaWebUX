describe('List artwork', () => {
  beforeEach(()=>{
    cy.visit('/')
    cy.wait(500)
    cy.get('#main > app-nav > nav > div > div.navbar-header > span:nth-child(3)').click()
  })
  it('Should be listed the artwork 1', () => {
    cy.get(':nth-child(1) > .list-group-item').then(($link)=>{
      expect($link[0].innerText).to.equal('Dogs')
    })
  });

  it('Should be listed the artwork 2', () => {
    cy.get(':nth-child(2) > .list-group-item').then(($link)=>{
      expect($link[0].innerText).to.equal('Self portrait in the studio')
    })
  });

  it('Should be listed the artwork 3', () => {
    cy.get(':nth-child(3) > .list-group-item').then(($link)=>{
      expect($link[0].innerText).to.equal('Self portrait')
    })
  });
});




