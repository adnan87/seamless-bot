import { Component, OnInit } from '@angular/core';
import * as io from "socket.io-client";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  socket = io('https://socket0test.herokuapp.com/');
  title = 'Shift-bot';
  public edited = true;
  ngOnInit(){
    this.hideSlider()
    this.socket = io.connect('https://socket0test.herokuapp.com/');
    this.socket.on('actionRecieved', function(msg) {
      alert('BYYY');
       console.log(msg.action);
         });
  }
  hideSlider(): void {
    let temp = this;
     setTimeout(function() {
         temp.edited = false;
     }, 10000);
    }
}
