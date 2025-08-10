describe('Formulario usuarios', () => {
  it('Contiene los campos email, contraseña y repetición de contraseña', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('[for="email"]').contains('Email');
    cy.get('[for="password"]').contains('Contraseña');
    cy.get('[for="repeat-password"]').contains('Repetición de contraseña');
  })
})