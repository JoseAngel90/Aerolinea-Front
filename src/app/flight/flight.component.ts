import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  airportWithMaxMovement: any;
  airlineWithMaxFlights: any;
  dayWithMaxFlights: any;
  airlinesWithMoreThanTwoFlights: any[] = [];

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.getAirportWithMaxMovement();
    this.getAirlineWithMaxFlights();
    this.getDayWithMaxFlights();
    this.getAirlinesWithMoreThanTwoFlights();
  }

  getAirportWithMaxMovement(): void {
    this.flightService.getAirportWithMaxMovement().subscribe(data => {
      this.airportWithMaxMovement = data;
    }, error => {
      console.error(error);
    });
  }

  getAirlineWithMaxFlights(): void {
    this.flightService.getAirlineWithMaxFlights().subscribe(data => {
      this.airlineWithMaxFlights = data;
    }, error => {
      console.error(error);
    });
  }

  getDayWithMaxFlights(): void {
    this.flightService.getDayWithMaxFlights().subscribe(data => {
      this.dayWithMaxFlights = data;
    }, error => {
      console.error(error);
    });
  }

  getAirlinesWithMoreThanTwoFlights(): void {
    this.flightService.getAirlinesWithMoreThanTwoFlights().subscribe(data => {
      console.log(data);
      this.airlinesWithMoreThanTwoFlights = data;
    }, error => {
      console.error(error);
    });
  }
}
