import { NgModule } from '@angular/core';

import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { HistorialComponent } from './components/historial/historial.component';
import { HistoryService } from './services/historial.service';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [
    CalculadoraComponent,
    HistorialComponent
  ],
  declarations: [
    CalculadoraComponent,
    HistorialComponent,
  ],
})
export class CalculadoraModule { }
