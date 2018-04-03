import { Component,OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { SlickModule } from 'ngx-slick';



@Component({
  selector: 'app-countryslider',
  templateUrl: './countryslider.component.html',
  styleUrls: ['./countryslider.component.scss']
})
export class CountrysliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  slides = [
      {img: 'assets/Images/UAEImages/16650.jpg'},
      {img: 'assets/Images/UAEImages/36345205-dubai-pics.jpg'},
      {img: 'assets/Images/UAEImages/d1b2337a309c5e6349b9f67a47abda29.jpg'},
      {img: 'assets/Images/UAEImages/Downtown-Dubai.jpg'},
      {img: 'assets/Images/UAEImages/family-days-out-dubai-800x444.jpg'},
      {img: 'assets/Images/UAEImages/Ferris-wheel-in-Al-Qasba-Sharjah.jpg'}
    ];
    slideConfig = {'slidesToShow': 1, 'slidesToScroll': 1, 'autoplay':true ,'speed':8000};



}
