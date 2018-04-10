import { Component, OnInit, Input } from '@angular/core';
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
  public childTitle = true;
   // parentMessage = "message from parent"
  ngOnInit(){
    this.hideScreens()
    this.socket = io.connect('https://socket0test.herokuapp.com/');
    this.socket.on('actionRecieved', function(msg) {
      alert('BYYY');
       console.log(msg.action);
         });
  }
  hideScreens(): void {
    let temp = this;
     setTimeout(function() {
         temp.edited = false;
     }, 15000);

    }
}
