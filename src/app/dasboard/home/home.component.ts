import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',  // Este selector es para uso interno, no es necesario usarlo directamente en app.component.html
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // Asegúrate de que sea 'styleUrls' y no 'styleUrl'
})
export class HomeComponent implements OnInit {
  data: any = null;
  // title = 'aerolinea';

  constructor(private http: HttpClient) { }

  ngOnInit(): void { 
    this.http.get<any>('http://127.0.0.1:8000/api/data').subscribe(data => {
      this.data = data;
  })    
  }
}
