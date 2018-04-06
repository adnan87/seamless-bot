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
      // slide: 1,
      // speed: 500,
      // interval: 1500,
      speed: 2000,
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
  // this.slides = [
  //     { img: 'assets/Images/KSA/1.png'},
  //     { img: 'assets/Images/KSA/2.png'}
  //   ];
  //  this.slideConfig = {'infinite': true,'slidesToShow': 1, 'slidesToScroll': 1, 'autoplay':true , 'autoplaySpeed': 600,'speed':500 };

   }
   public myfunc(event: Event) {
       // carouselLoad will trigger this funnction when your load value reaches
       // it is helps to load the data by parts to increase the performance of the app
       // must use feature to all carousel
    }

}
