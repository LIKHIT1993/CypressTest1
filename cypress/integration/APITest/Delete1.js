/// <reference types = "Cypress"/>

const datajson = require('../../fixtures/Create2')

describe('Post method - API testing', () => {

    var randomText = ""
    var testmail = ""


    it('POST-Test Case 1', () => {

        var pattern = "edrtyuiolkjhgfghjklrtyuioithjkjhgfdghjk"
        for (var i = 0; i < 10; i++) {
            randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
            testmail = randomText + "@globallogic.com"
        }

        cy.fixture('create2').then((payload) => {
            payload.forEach(data => {
            cy.request({

                method: 'POST',
                url: 'https://gorest.co.in/public/v1/users',
                headers: {
                    'Authorization': "Bearer c9d973d5ad1873f8ec285061b200fbc592582f5a429cf179f7b7382e9a0ca193"
                },

                body:
                {
                    /*"name" :"Test Automation",
                     "gender" :"male",
                     //"email" :"likhit1234@gmail.com",
                     "email" : testmail,
                     "status" :"active" */

                    /*"name" :datajson.name,
                    "gender" :datajson.gender,
                    "email" : testmail,
                    "status" :datajson.status */

                    "name": data.name,
                    "gender": data.gender,
                    "email": testmail,
                    "status": data.status
                }

            }).then((res) => {

                cy.log(JSON.stringify(res))
                expect(res.status).to.eq(201)

                //expect(res.body.data).has.property('email','likhit1234@gmail.com'),
                /*expect(res.body.data).has.property('email',testmail),
                expect(res.body.data).has.property('name','Test Automation'),
                expect(res.body.data).has.property('gender','male'),
                expect(res.body.data).has.property('status','active')*/

                expect(res.body.data).has.property('email', testmail),
                    expect(res.body.data).has.property('name', data.name),
                    expect(res.body.data).has.property('gender', data.gender),
                    expect(res.body.data).has.property('status', data.status)

            }).then((res) => {
                const userid = res.body.data.id
                cy.log("user id is" + userid)

                cy.request({
                    method: 'Delete',
                    url: 'https://gorest.co.in/public/v1/users/' + userid,
                    headers: {
                        'Authorization': "Bearer c9d973d5ad1873f8ec285061b200fbc592582f5a429cf179f7b7382e9a0ca193"
                    },

                })
                })

            })
        })
    })
})