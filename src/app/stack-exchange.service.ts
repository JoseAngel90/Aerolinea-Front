import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StackExchangeService {

  private apiUrl = 'http://localhost:8000/api'; 

  constructor(private http: HttpClient) { }

  search(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/stack-exchange/search`, { params: { query } });
  }
}
