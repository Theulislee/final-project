import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; //Add import de rotas

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule //esse módulo precisa ficar no ultimo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
