// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Cypress Test Hooks', function() {
    before(function() {
      // runs once before all tests in the it block
      cy.log("I am in before")
    })
  
    after(function() {
      // runs once after all tests in the it block
      cy.log("I am in after")
    })
  
    beforeEach(function() {
      // runs before each test in the it block
      cy.log("I am in beforeEach")
    })
  
    afterEach(function() {
      // runs after each test in the it block
      cy.log("I am in afterEach")
    })
  
    it('Cypress Test Case 1', function() {
      // Test Steps/Commands for Test Case 1
      cy.log("I am in Test Case 1 ")
      })
  
    specify('Cypress Test Case 2', function() {
      // Test Steps/Commands for Test Case 2
      cy.log("I am in Test Case 2")
      })
  })