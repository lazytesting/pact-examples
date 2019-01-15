import {TestBed, inject, getTestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {PactWeb, Matchers} from '@pact-foundation/pact-web';
import { BeerService } from './beer.service';

describe('BeerService', () => {

   let provider;

  beforeAll(function (done) {
    provider = new PactWeb({
      consumer: 'ui',
      provider: 'beer-api',
      port: 1234,
      host: '127.0.0.1'
    });

    // required for slower CI environments
    setTimeout(done, 2000);

    // Required if run with `singleRun: false`
    provider.removeInteractions();
  });

  afterAll(function (done) {
    provider.finalize()
    .then(function () {
      done();
    }, function (err) {
      done.fail(err);
    });
  });


   afterEach((done) => {
    done();
    // provider.verify().then(done, e => done.fail(e));
  });


  describe('get beers', () => {
    beforeAll((done) => {
      provider.addInteraction({
        uponReceiving: 'a request for beers',
        withRequest: {
          method: 'GET',
          path: '/beers/',

        },
        willRespondWith: {
          status: 200,
          body: Matchers.somethingLike(
              [{name: 'Kaapse Harrie', breweryName: 'Kaapse Brouwers'}]
          ),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      }).then(done, error => done.fail(error));
    });

    let service;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule
        ],
        providers: [
          BeerService
        ],
      });
      const testbed = getTestBed();
      service = testbed.get(BeerService);
    });

    fit('should return beers', function(done) {
         service.getBeers().subscribe(result => {
          console.log('subscribe', result);
          expect(result[0].name).toEqual('Kaapse Harrie');
          done();
         }, (error) => {
           done.fail(error);
         });
  });

});

});
