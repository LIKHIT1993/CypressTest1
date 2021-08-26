describe('Example to demonstrate file download in cypress', function () {

    it('File Download using cypress-downloadfile npm package', () => {
        cy.downloadFile('http://www.africau.edu/images/default/sample.pdf',
            'cypress/fixtures/Download', 'test.pdf')
        cy.readFile('cypress/fixtures/Download/test.pdf').should('contain', 'A Simple PDF File')    
    })
})