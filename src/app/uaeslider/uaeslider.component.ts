import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uaeslider',
  templateUrl: './uaeslider.component.html',
  styleUrls: ['./uaeslider.component.scss']
})
export class UaesliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slides = [
      {img: 'assets/Images/UAE/1.png'},
      {img: 'assets/Images/UAE/2.png'}
      ];
    slideConfig = {'slidesToShow': 1, 'slidesToScroll': 1, 'autoplay':true ,'speed':8000};

}
