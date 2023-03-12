describe('List museums', () => {
  beforeEach(()=>{
    cy.visit('/')
    cy.wait(500)
    cy.get('#main > app-nav > nav > div > div.navbar-header > span:nth-child(1)').click()
  })
  it('Should be listed the museum 1', () => {
    cy.get(':nth-child(1) > .list-group-item').then(($link)=>{
      expect($link[0].innerText).to.equal('Bendigo Art Gallery')
    })
  });

  it('Should be listed the museum 2', () => {
    cy.get(':nth-child(2) > .list-group-item').then(($link)=>{
      expect($link[0].innerText).to.equal('Museum of Modern Art')
    })
  });

  it('Should be listed the museum 3', () => {
    cy.get(':nth-child(3) > .list-group-item').then(($link)=>{
      expect($link[0].innerText).to.equal('Tate Modern')
    })
  });
});




