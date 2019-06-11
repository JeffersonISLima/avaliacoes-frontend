import { Component } from '@angular/core';
import { legends } from '../names/nameslist';

@Component({
  selector: 'app-edit', 
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss']
})

export class EditPage {
  legendsList: Array<string> = legends;
  editing = false; 
  
  ngOnInit() {
    this.handleChange;
  }

  handleChange(event: any) {   
    const { name, value } = event.target;    
    const indexLegend = this.legendsList.indexOf(name); 
    this.legendsList.splice(indexLegend, 1, value);
    this.toggleView();
  } 
  
  toggleView() {
    this.editing = !this.editing;
  }

}


