// filter.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent{
  
  selectedRadioButton: string = 'All';

  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>

  onRadioButtonSelectionChanged(){
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButton);
    // console.log(this.selectedRadioButton)
  }

  @Input('total') all: number = 0;
  @Input() free: number = 0;
  @Input() medium: number = 0;
  @Input() advanced: number = 0;

  @Input() books: any;

  constructor () {
    setTimeout(() => console.log(this.books))
  }

}
