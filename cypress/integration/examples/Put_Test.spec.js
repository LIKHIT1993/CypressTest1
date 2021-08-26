/// <reference types="cypress"/>

describe("Docket Put Test", () => {
	Cypress.config('pageLoadTimeout', 100000)
	it("Should modify an excisting Todo item", () => {
		cy.request({
			method: "POST",
			url: "https://docket-test.herokuapp.com/api/Todo/",
			headers: {
				token: "8d11bde6-4db7-4bab-9abf-0894e734ddc0",
			},
			body: {
				Username: "Bobby McBobFace",
				"Email Address": "bobface@test.com",
				Password: "secretz121",
			},
		})
			.its("status")
			.should("be.ok");
	});
});
