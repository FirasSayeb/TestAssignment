import { Given,When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open the website', () => {
  
    cy.visit('http://127.0.0.1:5500/rechercher.html')
  
})   
  
When('I Submit Search', ()=>{
  cy.get("#email").type('test@gmail.com')
  cy.get("#login").click() 
})
  
Then('I should be Searched',()=>{
  cy.get("#mess")
}) 