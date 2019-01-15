const { Pact } = require('@pact-foundation/pact');
const apiClient = require('./api-client.js');

describe('the beer api client', async function () {
    beforeEach(() => {
        const interaction = {
          state: 'there are some beers',
          uponReceiving: 'a list beer request',
          withRequest: {
            method:  'GET',
            path:  '/'
          },
          willRespondWith: {
            status: 200,
            headers: {
              'Content-Type': 'application/json'
            },
            body: [
               {  name: 'Kaapse Harrie', brewery: 'Kaapse Brouwers' }
            ]
          }
        };
        return provider.addInteraction(interaction);
      });

    it('should return the result', async function () {
       //const result = await apiClient.get();
      //const expected = { name: 'Kaapse Harrie', breweryName: 'Kaapse Brouwers' };

      // expect(result[0]).toEqual(expected);
    })
})
