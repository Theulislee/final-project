import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { DashboardRoutes } from './dashboard';
//import { CalculadoraRoutes } from './calculadora';
import { ConversorRoutes } from './conversor/conversor-routing.module'; //Add conversor-routing

export const routes: Routes = [ //Minhas rota que irá fazer o redirect para dashboard.
   { //Ao clicar no path vazio iremos ser redirecionado ao dashboard.
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full' //diz para fazero redirecionamento ao dashboard
  },
  //...DashboardRoutes,
	//...CalculadoraRoutes
  ...ConversorRoutes
];

/**
 * forRoot ele irá pegar essa instância unica e add essas rotas.
 */
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

