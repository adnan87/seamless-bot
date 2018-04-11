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
  		Outbound: false,
  		Inbound: false,
  		DepartureCity: false,
  		ArrivalCity: false,
  		Passengers: false,
  		Airline: false,
  		Hotel: false
  	}

  	var temp2 = {
  		Outbound: false,
  		Inbound: false,
  		DepartureCity: false,
  		ArrivalCity: false,
  		Passengers: false,
  		Airline: false,
  		Hotel: false
  	}

  	if(this.updatedFields && this.updatedFields.length){
  		for(let i in this.updatedFields) {
			temp.details[this.updatedFields[i]] = true;
		}
  	}

  	this.socket = io.connect('https://socket0test.herokuapp.com/');
    this.socket.on('actionRecieved', function(msg) {
    	var updatedFields = msg.updatedFields;
    	if(msg.action === "travelDetails"){
    		temp.details = temp2;
    		for(let i in updatedFields) {
    			temp.details[updatedFields[i]] = true;
    		}
    	}
    });
  }

}
