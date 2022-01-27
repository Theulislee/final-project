import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; //Add import de rotas
import { DashboardModule } from './dashboard'; //Add import dashboard file
import { CalculadoraModule } from './calculadora'; //Add import calculadora.module.ts

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CalculadoraModule,
    AppRoutingModule //esse módulo precisa ficar no ultimo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
