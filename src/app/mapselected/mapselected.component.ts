import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mapselected',
  templateUrl: './mapselected.component.html',
  styleUrls: ['./mapselected.component.scss']
})
export class MapselectedComponent implements OnInit {
 // @Output()
 // countryName = new EventEmitter();
 constructor() { }

  ngOnInit() {
  }
  //
  // onCountryClick(country){
  //   this.countryName.emit(country);
  // }

}
