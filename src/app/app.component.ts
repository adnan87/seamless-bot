import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Shift-bot';
  public edited = true;
  ngOnInit(){
    this.hideSlider()
  }

  hideSlider(): void {
    let temp = this;
     setTimeout(function() {
         temp.edited = false;
     }, 10000);
    }
}
