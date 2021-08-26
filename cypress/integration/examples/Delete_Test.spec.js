/// <reference types="cypress"/>

describe("Docket Delete Test", () => {
	it("Should delete a specific Todo", () => {
		cy.request({
			method: "DELETE",
			url: "https://docket-test.herokuapp.com/api/Todo/2",
			headers: {
				token: "8d11bde6-4db7-4bab-9abf-0894e734ddc0",
			},
		})
			.its("status")
			.should("be.ok");
	});
});
