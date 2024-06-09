import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }
  getRequest(route: string ) {
    return this.http
      .get(route)
      .pipe(
        map(this.getData),
    );
  }


  getData():any {
    const route = `${this.apiUrl}/getData`;
    return this.getRequest(route);
  }

  

}
