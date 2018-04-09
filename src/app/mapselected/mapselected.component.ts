import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mapselected',
  templateUrl: './mapselected.component.html',
  styleUrls: ['./mapselected.component.scss']
})
export class MapselectedComponent implements OnInit {

 constructor() { }

  ngOnInit() {
    // this.socket = io.connect('https://socket0test.herokuapp.com/');
    // this.socket.on('actionRecieved', function(msg) {
    //   alert('BYYY');
    //    console.log(msg.action);
    //          // console.log(this.messages);
    //      });
  }


}
