/// <reference types="Cypress" />

context('Download Pdf', () => {
    it('Download Pdf', () => {
      const pdfUrl = 'http://www.pdf995.com/samples/pdf.pdf';
  
      // ADDED: "encodeBodyToBase64: true"
      cy.request({ url: pdfUrl, gzip: false, encodeBodyToBase64: true }).then(
        (response) => {
          const fileName = 'test';
          const filePath = 'temp/' + fileName + '.pdf';
  
          cy.writeFile(filePath, response.body, {
            encoding: 'binary',
            decodeContentFromBase64: true, // ADDED
          });
        }
      );
    });
  });