import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  // search.component.ts
  enteredSearchValue: string = '';
  
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  
  // search.component.ts
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue)
    // console.log(this.searchTextChanged)
    // console.log(this.enteredSearchValue)
  }

}

