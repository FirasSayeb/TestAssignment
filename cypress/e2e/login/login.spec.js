import { Given,When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open the website', () => {
  
    cy.visit('http://127.0.0.1:5500/index.html')
  
})   
  
When('I Submit Login', ()=>{
  cy.get("#email").type('email@gmail.com')
  cy.get("#password").type('password')
  cy.get("#login").click() 
})
  
Then('I should be logged in',()=>{
  cy.get("#mess")
}) 