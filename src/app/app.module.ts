import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickModule } from 'ngx-slick';
// import { CarouselModule } from 'angular4-carousel';


import { AppComponent } from './app.component';
import { WelcomescreenComponent } from './welcomescreen/welcomescreen.component';
import { MapComponent } from './map/map.component';
import { CountrysliderComponent } from './countryslider/countryslider.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomescreenComponent,
    MapComponent,
    CountrysliderComponent
  ],
  imports: [
    BrowserModule,
    SlickModule.forRoot()
    // CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
