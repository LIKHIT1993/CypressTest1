/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#opentab').then(function(e1) {
const url = e1.prop('href')
cy.log(url)
cy.visit(url)

})
})

})