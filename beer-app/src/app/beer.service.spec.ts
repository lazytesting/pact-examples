import { TestBed, inject } from '@angular/core/testing';

import { BeerService } from './beer.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BeerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BeerService]
    });
  });

  it('should return some beers',
  inject([HttpTestingController, BeerService],
    (httpMock: HttpTestingController, service: BeerService) => {
      service.getBeers().subscribe(data => {
        expect(data[0].name).toBe('Test Beer');
      });
      const req = httpMock.expectOne('http://localhost:9999/beers/');
      expect(req.request.method).toEqual('GET');

      req.flush([{  code: 'b100', name: 'Test Beer', breweryName: 'Test Brew'}]);
      httpMock.verify();
    })
  );
});
