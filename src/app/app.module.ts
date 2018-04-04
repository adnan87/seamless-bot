import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickModule } from 'ngx-slick';
// import { SlimScroll } from 'angular4-slimscroll';
import {Directive} from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomescreenComponent } from './welcomescreen/welcomescreen.component';
import { MapComponent } from './map/map.component';
import { CountrysliderComponent } from './countryslider/countryslider.component';
import { PlaneComponent } from './plane/plane.component';
import { MapselectedComponent } from './mapselected/mapselected.component';
import { DeparturedetailComponent } from './departuredetail/departuredetail.component';
import { ThankYouComponent } from './thank-you/thank-you.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomescreenComponent,
    MapComponent,
    CountrysliderComponent,
    PlaneComponent,
    MapselectedComponent,
    DeparturedetailComponent,
    ThankYouComponent
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
