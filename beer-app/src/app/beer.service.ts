import { Injectable } from '@angular/core';
import { Beer } from './Beer';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import 'rxjs/add/operator/map';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class BeerService {

  constructor(private httpClient: HttpClient) { }

  getBeers(): Observable<Beer[]> {
    return this.httpClient.get<BeerResponseItem[]>('http://127.0.0.1:9999/beers/')
    .pipe(catchError(this.handleError))
      .map((response) => {
        console.log(response);
        const result = response.map(item => {
          const beer = new Beer();
          beer.name = item.name;
          beer.breweryName = item.breweryName;
          return beer;
        });
        return result;
      });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return _throw(
      'Something bad happened; please try again later.');
  }
}

class BeerResponseItem {
  code: string;
  name: string;
  breweryName: string;
}
