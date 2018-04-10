import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';



@Component({
  selector: 'app-bahrainslider',
  templateUrl: './bahrainslider.component.html',
  styleUrls: ['./bahrainslider.component.scss']
})
export class BahrainsliderComponent implements OnInit {
  public itemList: object[] = [];
  public carouselOne: NgxCarousel;

  constructor() {
    this.itemList = [
        {
          title: 'assets/Images/Bahrain/1.png',

        },
        {
          title: 'assets/Images/Bahrain/2.png',

        },
        {
          title: 'assets/Images/Bahrain/1.png',

        },
        {
          title: 'assets/Images/Bahrain/2.png',
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
        load: 2,
        touch: true,
        loop: true,
        custom: 'banner'
      }
    }

  public myfunc(event: Event) {
  
   }

}
