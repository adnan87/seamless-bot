import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mapselected',
  templateUrl: './mapselected.component.html',
  styleUrls: ['./mapselected.component.scss']
})
export class MapselectedComponent implements OnInit {
@Input() childTitle: boolean;
 constructor() { }

  ngOnInit() {
    alert(this.childTitle)
    // this.socket = io.connect('https://socket0test.herokuapp.com/');
    // this.socket.on('actionRecieved', function(msg) {
    //   alert('BYYY');
    //    console.log(msg.action);
    //          // console.log(this.messages);
    //      });
  }

  onClickCountryClik(id){
    var kuwait = document.getElementById(id);
    var saudi = document.getElementById(id);
    var bahrain = document.getElementById(id);
    var uae = document.getElementById(id);
    var oman = document.getElementById(id);

    if(this.childTitle && kuwait){
      kuwait.style.fill='#18bf4b';
    }
    if(this.childTitle && saudi){
      saudi.style.fill='#18bf4b';
    }
    if(this.childTitle && bahrain){
      bahrain.style.fill='#18bf4b';
    }
    if(this.childTitle && uae){
      uae.style.fill='#18bf4b';
    }
    if(this.childTitle && oman){
      oman.style.fill='#18bf4b';
    }
  }


}
