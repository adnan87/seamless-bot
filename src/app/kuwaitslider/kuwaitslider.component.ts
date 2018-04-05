import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-kuwaitslider',
  templateUrl: './kuwaitslider.component.html',
  styleUrls: ['./kuwaitslider.component.scss']
})
export class KuwaitsliderComponent implements OnInit {
  public carouselOne: NgxCarousel;

  constructor() { }

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 600,
      interval: 3000,
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }
  }
  // slides = [
  //     {img: 'assets/Images/Kuwait/1.png'},
  //     {img: 'assets/Images/Kuwait/2.png'}
  //     ];
  //   slideConfig = {'slidesToShow': 1, 'slidesToScroll': 1, 'autoplay':true ,'speed':8000};
  public myfunc(event: Event) {
      // carouselLoad will trigger this funnction when your load value reaches
      // it is helps to load the data by parts to increase the performance of the app
      // must use feature to all carousel
   }
}
