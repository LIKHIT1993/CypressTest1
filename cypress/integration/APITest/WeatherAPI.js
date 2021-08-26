describe('Check weather information', () => {
    it('Get weather information for cities', () => {

        cy.request({

            Method: 'GET',
            url: 'https://www.metaweather.com/api/location/search/?query=san',
            headers: {
                'Authorization': "Bearer c9d973d5ad1873f8ec285061b200fbc592582f5a429cf179f7b7382e9a0ca193"
            },

        }).then((res) => {
            const city = res.body[0].title
            return city
        }).then((city) => {
            cy.request({
                method: 'Get',
                url: 'https://www.metaweather.com/api/location/search/?query=' + city

            }).then((resp) => {
                expect(resp.status).to.eq(200)
                expect(resp.body[0]).to.have.property('title', city)
            })
        })

    })

    it('Get weather information for all cities', () => {

        cy.request({

            Method: 'GET',
            url: 'https://www.metaweather.com/api/location/search/?query=Am',
            headers: {
                'Authorization': "Bearer c9d973d5ad1873f8ec285061b200fbc592582f5a429cf179f7b7382e9a0ca193"
            },

        }).then((res) => {
            const location = res.body
            return location
        }).then((location) => {
            for(let i=0; i<location.length; i++) {
            cy.request({
                method: 'Get',
                url: 'https://www.metaweather.com/api/location/search/?query=' + location[i].title

            }).then((resp) => {
                expect(resp.status).to.eq(200)
                expect(resp.body[0]).to.have.property('title',location[i].title)
            }) }
        })
    
    }) 
})