import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mapselected',
  templateUrl: './mapselected.component.html',
  styleUrls: ['./mapselected.component.scss']
})
export class MapselectedComponent implements OnInit {
@Input() country: string;
 constructor() { }

  ngOnInit() {
    this.selectRegion();
  }

  selectRegion(): void {
    var kuwait = document.getElementById('kuwait');
    var saudi = document.getElementById('saudi');
    var bahrain = document.getElementById('bahrain');
    var uae = document.getElementById('uae');
    var oman = document.getElementById('oman');

    switch (this.country) {
      case 'kuwait':
        kuwait.style.fill='#18bf4b';
        this.unsetFill(kuwait);
        break;
      case 'ksa':
        saudi.style.fill='#18bf4b';
        this.unsetFill(saudi);
        break;
      case 'bahrain':
        bahrain.style.fill='#18bf4b';
        this.unsetFill(bahrain);
        break;
      case 'uae':
        uae.style.fill='#18bf4b';
        this.unsetFill(uae);
        break;
      case 'oman':
        oman.style.fill='#18bf4b';
        this.unsetFill(oman);
        break;
    }
  }

  unsetFill(region): void {
    setTimeout(function() {
      region.style.fill = '';
    }, 5000);
  }
}
