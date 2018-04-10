import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickModule } from 'ngx-slick';
import {Routes, RouterModule} from "@angular/router";
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { ChatService } from './chat.service';



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
    NgxCarouselModule
    // RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
