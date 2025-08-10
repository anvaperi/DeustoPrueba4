describe('Formulario usuarios', () => {
  it('Contiene los campos email, contraseña y repetición de contraseña', () => {
    cy.visit('http://127.0.0.1:5500/evaluacion/index.html');
    cy.get('[for="email"]').contains('Correo electrónico');
    cy.get('[for="password"]').contains('Contraseña');
    cy.get('[for="repeat-password"]').contains('Repita contraseña');
  })
})

describe('Formulario usuarios', () => {
  it('Advertencia y botón invisible para contraseñas discordantes', () => {
    cy.visit('http://127.0.0.1:5500/evaluacion/index.html');
    cy.get('#password').type('abc');
    cy.get('#repeat-password').type('def');
    cy.get('#send-btn').should('have.css', 'display', 'none');
    cy.get('#password-message').should('have.css', 'display', 'block');
  })
})