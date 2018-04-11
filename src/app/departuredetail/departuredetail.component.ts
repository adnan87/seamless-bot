import { Component, OnInit, Input } from '@angular/core';
import * as io from "socket.io-client";

@Component({
  selector: 'app-departuredetail',
  templateUrl: './departuredetail.component.html',
  styleUrls: ['./departuredetail.component.scss']
})

export class DeparturedetailComponent implements OnInit {
  @Input() updatedFields: string[];
  socket = io.connect('https://socket0test.herokuapp.com/');
  public details: any = {};

  constructor() { }

  ngOnInit() {
  	var temp = this;

  	this.details = {
  		departureDate: false,
  		arrivalDate: false,
  		departureCity: false,
  		arrivalCity: false,
  		passengers: false,
  		airline: false,
  		hotel: false
  	}

  	var temp2 = {
  		departureDate: false,
  		arrivalDate: false,
  		departureCity: false,
  		arrivalCity: false,
  		passengers: false,
  		airline: false,
  		hotel: false
  	}

  	if(this.updatedFields.length){
  		for(let i in this.updatedFields) {
			temp.details[this.updatedFields[i]] = true;
		}
  	}

  	this.socket = io.connect('https://socket0test.herokuapp.com/');
    this.socket.on('actionRecieved', function(msg) {
    	var updatedFields = msg.action.result.updatedFields;
    	if(msg.action.result.action === "travelDetails"){
    		temp.details = temp2;
    		for(let i in updatedFields) {
    			temp.details[updatedFields[i]] = true;
    		}
    	}
    });
  }

}
