import {errorMessages} from "../../src/components/Register"
describe('Register Page', () => {
  describe('Error Messages ', () => {
  it('name input throws error for 2 chars', () => {

    cy.visit(' http://localhost:5178/');
    cy.get('[data-cy="ad-input"]').type("em");
    cy.contains(errorMessages.ad)
  })
   it('surname input throws error for 2 chars', () => {

    cy.visit(' http://localhost:5178/');
    cy.get('[data-cy="soyad-input"]').type("şa");
    cy.contains(errorMessages.soyad)
  })
  it('email input throws error for emre@wit.', () => {

    cy.visit(' http://localhost:5178/');
    cy.get('[data-cy="email-input"]').type("emre@wit");
    cy.contains(errorMessages.email)
  })
  it('password input throws error for 1234', () => {

    cy.visit(' http://localhost:5178/');
    cy.get('[data-cy="password-input"]').type("1234");
    cy.contains(errorMessages.password)
  })
   it('button is disabled for unvalited inputs', () => {

    cy.visit(' http://localhost:5178/');
    cy.get('[data-cy="password-input"]').type("1234");
    cy.get('[data-cy="submit-button"]').should("be.disabled")
    
  })
  
})
describe('Forms input validated ', () => {
  it('button enabled for validated inputs', () => {

    cy.visit(' http://localhost:5178/');
    cy.get('[data-cy="ad-input"]').type("emre");
    cy.get('[data-cy="soyad-input"]').type("şahiner");
    cy.get('[data-cy="email-input"]').type("emre@wit.com.tr");
    cy.get('[data-cy="password-input"]').type("12345Aa*");
    cy.get('[data-cy="submit-button"]').should("be.enabled")
    
  })
  
})

  it('submits form on validated inputs', () => {

    cy.visit(' http://localhost:5178/');
    cy.get('[data-cy="ad-input"]').type("emre");
    cy.get('[data-cy="soyad-input"]').type("şahiner");
    cy.get('[data-cy="email-input"]').type("emre@wit.com.tr");
    cy.get('[data-cy="password-input"]').type("12345Aa*");
    cy.get('[data-cy="submit-button"]').click();
    cy.get('[data-cy="response-message"]').should("be.visible");
    
  })
  

})
