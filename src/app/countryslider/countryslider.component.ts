import { Component,OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { SlickModule } from 'ngx-slick';

@Component({
  selector: 'app-countryslider',
  templateUrl: './countryslider.component.html',
  styleUrls: ['./countryslider.component.scss']
})
export class CountrysliderComponent implements OnInit {
   slides:Array<Object>;
   slideConfig;
  constructor() { }
  ngOnInit() {
    this.slides = [
        { img: 'assets/Images/KSA/1.png'},
        { img: 'assets/Images/KSA/2.png'}
      ];
   this.slideConfig = {'slidesToShow': 1, 'slidesToScroll': 1, 'autoplay':true , 'autoplaySpeed': 7000,'speed':3000 };

  }

}
