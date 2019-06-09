import { Component } from '@angular/core';
import { legends } from '../names/nameslist';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
   public legendsList: Array<string> = legends;

ngOnInit() {    
  
  }  
}
