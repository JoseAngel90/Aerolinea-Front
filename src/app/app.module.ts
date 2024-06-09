import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './dasboard/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiciosExternosComponent } from './servicios-externos/servicios-externos.component';
import { FormsModule } from '@angular/forms';
import { FlightComponent } from './flight/flight.component';
import { DataService } from './data.service';
import { FlightService } from './flight.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiciosExternosComponent,
    FlightComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DataService, FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
