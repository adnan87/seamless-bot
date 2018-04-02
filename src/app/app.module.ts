import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomescreenComponent } from './welcomescreen/welcomescreen.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomescreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
