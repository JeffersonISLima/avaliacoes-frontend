import { Component } from '@angular/core';
import { legends } from '../names/nameslist';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})

export class SearchPage {
  searchInput : string;
  results = [];
  legendsList: Array<string> = legends;
  
  ngOnInit() {
   
  }

  onSearch() {
    this.results = this.legendsList.filter( ( legend ) => {
      return legend.toLowerCase().includes(this.searchInput.toLowerCase());
    });
  }
}
