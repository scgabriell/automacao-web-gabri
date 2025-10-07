

describe('Exemplo de clique com comando personalizado', () => {
  it('Deve clicar no link "Actions"', () => {
    cy.visit('/')
    cy.get('[data-testid="add-user-button"]').click()
    //cy.addUser()
  })
})
