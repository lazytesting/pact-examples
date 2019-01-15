import { TestBed, async, tick, fakeAsync, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BeerService } from './beer.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Beer } from './Beer';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        BeerService
      ],
      imports : [
        HttpClientModule
      ]
    }).overrideComponent(AppComponent, {
      set: {
        providers: [
          { provide: BeerService, useClass: MockBeerService}
        ]
      }
    }).compileComponents();
  }));

  it(`should have the brewery as title`, fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    tick();
    expect(component.title).toEqual('Beermock');
  }));
});

class MockBeerService {
  getBeers(): Observable<Beer[]> {
    const mockBeer = new Beer();
    mockBeer.name = 'Beermock';
    mockBeer.breweryName = 'BrewMock';
    return Observable.of([mockBeer]);
  }
}
