import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  public pageAdvance = 2;
  constructor() { }

  ngOnInit() {
  }

}
