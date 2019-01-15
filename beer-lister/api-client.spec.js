const apiClient = require('./api-client.js');

xdescribe('the beer api client', async function(){
    it('should return the result', async function(){
       const result = await apiClient.get();
       const expected = { name: 'Kaapse Harrie', breweryName: 'Kaapse Brouwers' };

       expect(result[0]).toEqual(expected);
    })
})
