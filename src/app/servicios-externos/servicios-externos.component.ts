import { Component, OnInit } from '@angular/core';
import { StackExchangeService } from '../stack-exchange.service';


@Component({
  selector: 'app-servicios-externos',
  templateUrl: './servicios-externos.component.html',
  styleUrls: ['./servicios-externos.component.css']
})
export class ServiciosExternosComponent implements OnInit {
  results: any[] = [];
  query: string = 'perl';

  
  answeredCount: number = 0;
  unansweredCount: number = 0;
  highestReputationAnswer: any = null;
  leastViewedAnswer: any = null;
  oldestAnswer: any = null;
  newestAnswer: any = null;

  constructor(private stackExchangeService: StackExchangeService) { }

  ngOnInit() {
    this.search();
  }

  search() {
    this.stackExchangeService.search(this.query).subscribe(
      data => {
        console.log('Total Response:', data); // Muestra toda la respuesta
        this.results = data.items;
        this.answeredCount = data.answeredCount;
        this.unansweredCount = data.unansweredCount;
        this.highestReputationAnswer = data.highestReputationAnswer;
        this.leastViewedAnswer = data.leastViewedAnswer;
        this.oldestAnswer = data.oldestAnswer;
        this.newestAnswer = data.newestAnswer;
  
        console.log('Respuestas contestadas:', data.answeredCount);
        console.log('Respuestas no contestadas:', data.unansweredCount);
        console.log('Respuesta con mayor reputación: ', this.highestReputationAnswer.owner.reputation);
        console.log('Respuesta con menor número de vistas:', this.leastViewedAnswer.owner.display_name + ' (' + this.leastViewedAnswer.view_count + ')');
        console.log('Respuesta más vieja:', this.oldestAnswer.owner.display_name + ' (' + new Date(this.oldestAnswer.creation_date * 1000).toLocaleString() + ')');
        console.log('Respuesta más actual:', this.newestAnswer.owner.display_name + ' (' + new Date(this.newestAnswer.creation_date * 1000).toLocaleString() + ')');
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
  
  formateofecha(params:any):any {
    return new Date(params * 1000).toLocaleString();
  }

}
