import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kuwaitslider',
  templateUrl: './kuwaitslider.component.html',
  styleUrls: ['./kuwaitslider.component.scss']
})
export class KuwaitsliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slides = [
      {img: 'assets/Images/Kuwait/1.png'},
      {img: 'assets/Images/Kuwait/2.png'}
      ];
    slideConfig = {'slidesToShow': 1, 'slidesToScroll': 1, 'autoplay':true ,'speed':8000};

}
