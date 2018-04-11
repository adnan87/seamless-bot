import { Component, OnInit } from '@angular/core';
import * as io from "socket.io-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  socket = io.connect('https://socket0test.herokuapp.com/');
  public title = 'Shift-bot';
  public welcome = true;
  public mapSelector = false;
  public ksa = false;
  public bahrain = false;
  public kuwait = false;
  public oman = false;
  public uae = false;
  public travelling = false;
  public travelDetails = false;
  public thankYou = false;

  public country: string;
  public updatedFields: string[];

  ngOnInit() {
    var temp = this;

    this.socket = io.connect('https://socket0test.herokuapp.com/');
    this.socket.on('actionRecieved', function(msg) {
      let action: string = msg.action.result.action;

      switch(action){
        case 'countrySelect':
          let country = msg.action.result.parameters.country;
          temp.country = country;
          temp.ksa = false;
          temp.bahrain = false;
          temp.kuwait = false;
          temp.oman = false;
          temp.uae = false;
          temp.travelling = false;
          temp.travelDetails = false;
          temp.thankYou = false;
          temp.welcome = false;
          temp.mapSelector = true;
          break;

        case 'visit-ksa':
          temp.ksa = true;
          temp.bahrain = false;
          temp.kuwait = false;
          temp.oman = false;
          temp.uae = false;
          temp.travelling = false;
          temp.travelDetails = false;
          temp.thankYou = false;
          temp.welcome = false;
          temp.mapSelector = false;
          break;

        case 'visit-bahrain':
          temp.ksa = false;
          temp.bahrain = true;
          temp.kuwait = false;
          temp.oman = false;
          temp.uae = false;
          temp.travelling = false;
          temp.travelDetails = false;
          temp.thankYou = false;
          temp.welcome = false;
          temp.mapSelector = false;
          break;

        case 'visit-kuwait':
          temp.ksa = false;
          temp.bahrain = false;
          temp.kuwait = true;
          temp.oman = false;
          temp.uae = false;
          temp.travelling = false;
          temp.travelDetails = false;
          temp.thankYou = false;
          temp.welcome = false;
          temp.mapSelector = false;
          break;

        case 'visit-oman':
          temp.ksa = false;
          temp.bahrain = false;
          temp.kuwait = false;
          temp.oman = true;
          temp.uae = false;
          temp.travelling = false;
          temp.travelDetails = false;
          temp.thankYou = false;
          temp.welcome = false;
          temp.mapSelector = false;
          break;

        case 'visit-uae':
          temp.ksa = false;
          temp.bahrain = false;
          temp.kuwait = false;
          temp.oman = true;
          temp.uae = false;
          temp.travelling = false;
          temp.travelDetails = false;
          temp.thankYou = false;
          temp.welcome = false;
          temp.mapSelector = false;
          break;

        case 'travelling':
          temp.ksa = false;
          temp.bahrain = false;
          temp.kuwait = false;
          temp.oman = false;
          temp.uae = false;
          temp.travelling = true;
          temp.travelDetails = false;
          temp.thankYou = false;
          temp.welcome = false;
          temp.mapSelector = false;

          setTimeout(function(){
            temp.travelling = false;
            temp.travelDetails = true;
          }, 5000);

          break;

        case 'travelDetails':
          temp.ksa = false;
          temp.bahrain = false;
          temp.kuwait = false;
          temp.oman = false;
          temp.uae = false;
          temp.travelling = false;
          temp.thankYou = false;
          temp.welcome = false;
          temp.mapSelector = false;
          let updatedFields = msg.action.result.updatedFields;
          temp.updatedFields = updatedFields;
          temp.travelDetails = true;
          break;

        case 'thankYou':
          temp.ksa = false;
          temp.bahrain = false;
          temp.kuwait = false;
          temp.oman = false;
          temp.uae = false;
          temp.travelling = false;
          temp.travelDetails = false;
          temp.thankYou = true;
          temp.welcome = false;
          temp.mapSelector = false;
          break;

        case 'welcome':
          temp.ksa = false;
          temp.bahrain = false;
          temp.kuwait = false;
          temp.oman = false;
          temp.uae = false;
          temp.travelling = false;
          temp.travelDetails = false;
          temp.thankYou = false;
          temp.welcome = true;
          temp.mapSelector = false;
          break;
      };
    });
  }
}
