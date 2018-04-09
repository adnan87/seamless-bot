import { Component, OnInit } from '@angular/core';
import * as io from "socket.io-client";

@Component({
  selector: 'app-welcomescreen',
  templateUrl: './welcomescreen.component.html',
  styleUrls: ['./welcomescreen.component.scss']
})
export class WelcomescreenComponent implements OnInit {
  // socket = io('https://socket0test.herokuapp.com/');

  constructor() {

  }

  ngOnInit() {
    // this.socket = io.connect('https://socket0test.herokuapp.com/');
    // this.socket.on('actionRecieved', function(msg) {
    //   alert('BYYY');
    //    console.log(msg.action);
    //
    //      });

}


}
