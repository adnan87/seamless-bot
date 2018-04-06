import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-omanslider',
  templateUrl: './omanslider.component.html',
  styleUrls: ['./omanslider.component.scss']
})
export class OmansliderComponent implements OnInit {
  public itemList: object[] = [];
  public carouselOne: NgxCarousel;

  constructor() {
    this.itemList = [
        {
          title: 'assets/Images/Oman/1.png',

        },
        {
          title: 'assets/Images/Oman/2.png',

        },
        {
          title: 'assets/Images/Oman/1.png',

        },
        {
          title: 'assets/Images/Oman/2.png',
        }

      ] }

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 3400,
      interval: 3800,
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }
  }
  public myfunc(event: Event) {
      // carouselLoad will trigger this funnction when your load value reaches
      // it is helps to load the data by parts to increase the performance of the app
      // must use feature to all carousel
   }
}
