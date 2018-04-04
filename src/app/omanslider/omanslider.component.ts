import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-omanslider',
  templateUrl: './omanslider.component.html',
  styleUrls: ['./omanslider.component.scss']
})
export class OmansliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slides = [
      {img: 'assets/Images/Oman/1.png'},
      {img: 'assets/Images/Oman/2.png'}
      ];
    slideConfig = {'slidesToShow': 1, 'slidesToScroll': 1, 'autoplay':true ,'speed':8000};

}
