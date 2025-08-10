describe('Formulario usuarios', () => {
  it('Contiene los campos email, contraseña y repetición de contraseña', () => {
    cy.visit('http://127.0.0.1:5500/evaluacion/index.html');
    cy.get('[for="email"]').contains('Correo electrónico');
    cy.get('[for="password"]').contains('Contraseña');
    cy.get('[for="repeat-password"]').contains('Repita contraseña');
  })
})