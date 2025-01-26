import { Given,When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open the website', () => {
  
    cy.visit('http://127.0.0.1:5500/ajouter.html')
  
})   
  
When('I Submit Add', ()=>{
  cy.get("#email").type('test@gmail.com')
  cy.get("#password").type('password')
  cy.get("#login").click() 
})
  
Then('I should be Added',()=>{
  cy.get("#mess")
}) 