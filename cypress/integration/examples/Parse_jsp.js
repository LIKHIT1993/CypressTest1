describe('Example to demonstrate file download in cypress', function () {

    it('File Download using cypress-downloadfile npm package', () => {
        cy.downloadFile('https://www.flyrnai.org/compleat/ExampleFiles.jsp',
            'cypress/fixtures/Download', 'test.jsp')
        cy.readFile('cypress/fixtures/Download/test.jsp').should('contain', 'Tab-Separated, One data column')    
    })
})