import { Component,OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { NgxCarousel } from 'ngx-carousel';
// import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
// import {OwlCarousel} from 'ngx-owl-carousel';
// import { OwlModule } from 'ngx-owl-carousel';
// import { SlickModule } from 'ngx-slick';

@Component({
  selector: 'app-countryslider',
  templateUrl: './countryslider.component.html',
  styleUrls: ['./countryslider.component.scss']
})
export class CountrysliderComponent implements OnInit {
  public itemList: object[] = [];
  public carouselOne: NgxCarousel;

     //slides:Array<Object>;
   // slides:Array<Object> = [
   //      'assets/Images/KSA/1.png',
   //      'assets/Images/KSA/2.png'
   //   ];
    // slideConfig;
  constructor() {
  this.itemList = [
      {
        title: 'assets/Images/KSA/1.png',

      },
      {
        title: 'assets/Images/KSA/2.png',

      },
      {
        title: 'assets/Images/KSA/1.png',

      },
      {
        title: 'assets/Images/KSA/2.png',
      }

    ]
  }
  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      speed: 3400,
      interval: 3800,
      point: {
        visible: false
      },
      load:2,
      touch: true,
      loop: true,
      easing: 'ease',
      animation: 'lazy',
      custom: 'banner'
    }
  
   }
   public myfunc(event: Event) {
       // carouselLoad will trigger this funnction when your load value reaches
       // it is helps to load the data by parts to increase the performance of the app
       // must use feature to all carousel
    }



}
