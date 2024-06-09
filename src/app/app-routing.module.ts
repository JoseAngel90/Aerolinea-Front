import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dasboard/home/home.component';  
import { FlightComponent } from './flight/flight.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'flight', component: FlightComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
