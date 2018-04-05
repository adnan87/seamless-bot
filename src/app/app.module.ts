import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickModule } from 'ngx-slick';
// import { CarouselModule } from 'angular4-carousel';
// import { OwlModule } from 'ngx-owl-carousel';
import {Routes, RouterModule} from "@angular/router";
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import {Directive} from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomescreenComponent } from './welcomescreen/welcomescreen.component';
import { MapComponent } from './map/map.component';
import { CountrysliderComponent } from './countryslider/countryslider.component';
import { PlaneComponent } from './plane/plane.component';
import { MapselectedComponent } from './mapselected/mapselected.component';
import { DeparturedetailComponent } from './departuredetail/departuredetail.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { BahrainsliderComponent } from './bahrainslider/bahrainslider.component';
import { OmansliderComponent } from './omanslider/omanslider.component';
import { KuwaitsliderComponent } from './kuwaitslider/kuwaitslider.component';
import { UaesliderComponent } from './uaeslider/uaeslider.component';

const routes: Routes = [
  {
    path:'ksa',
    component: CountrysliderComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    WelcomescreenComponent,
    MapComponent,
    CountrysliderComponent,
    PlaneComponent,
    MapselectedComponent,
    DeparturedetailComponent,
    ThankYouComponent,
    BahrainsliderComponent,
    OmansliderComponent,
    KuwaitsliderComponent,
    UaesliderComponent
  ],
  imports: [
    BrowserModule,
    SlickModule.forRoot(),
     NgxCarouselModule,
    // CarouselModule,
    // OwlModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
