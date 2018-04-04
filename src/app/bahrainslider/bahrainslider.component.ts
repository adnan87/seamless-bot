import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bahrainslider',
  templateUrl: './bahrainslider.component.html',
  styleUrls: ['./bahrainslider.component.scss']
})
export class BahrainsliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slides = [
      {img: 'assets/Images/Bahrain/1.png'},
      {img: 'assets/Images/Bahrain/2.png'}
      ];
    slideConfig = {'slidesToShow': 1, 'slidesToScroll': 1, 'autoplay':true ,'speed':8000};


}
