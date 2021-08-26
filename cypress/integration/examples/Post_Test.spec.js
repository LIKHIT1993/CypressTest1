/// <reference types="cypress"/>

describe("Docket Post Test", () => {
	it("Should create a Todo item", () => {
		cy.request({
			method: "POST",
			url: "https://docket-test.herokuapp.com/api/Todo/",
			headers: {
				token: "8d11bde6-4db7-4bab-9abf-0894e734ddc0",
			},
			body: {
				Body: "Walk cat",
			},
		})
			.its("status")
			.should("be.ok");
	});
});
