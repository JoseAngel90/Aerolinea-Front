import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private apiUrl = 'http://localhost:8000/api'; 
  constructor(private http: HttpClient) { }

  getAirportWithMaxMovement(): Observable<any> {
    return this.http.get(`${this.apiUrl}/airport/max-movement`);
  }

  getAirlineWithMaxFlights(): Observable<any> {
    return this.http.get(`${this.apiUrl}/airline/max-flights`);
  }

  getDayWithMaxFlights(): Observable<any> {
    return this.http.get(`${this.apiUrl}/day/max-flights`);
  }

  getAirlinesWithMoreThanTwoFlights(): Observable<any> {
    return this.http.get(`${this.apiUrl}/airlines/more-than-two-flights`);
  }
}
