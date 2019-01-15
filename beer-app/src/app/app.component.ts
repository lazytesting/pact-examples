import { Component, OnInit } from '@angular/core';
import { BeerService } from './beer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BeerService]
})
export class AppComponent implements OnInit {
  constructor(private beerService: BeerService) {}
  title = 'app';

  ngOnInit() {
    this.beerService.getBeers().subscribe(data => {
      this.title = data[0].name;
    });
  }
}
