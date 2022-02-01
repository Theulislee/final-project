import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardRoutes } from './dashboard/dashboard-routing.module'; //Add dashboard-routing
import { CalculadoraRoutes } from './calculadora/calculadora-routing.module'; //Add calculadora-routing
import { ConversorRoutes } from './conversor/conversor-routing.module'; //Add conversor-routing
import { TarefaRoutes } from './tarefas';

export const routes: Routes = [ //Minhas rota que irá fazer o redirect para dashboard.
   { //Ao clicar no path vazio iremos ser redirecionado ao dashboard,calculadora,conversor ...
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full' //diz para fazer o redirecionamento ao dashboard
  },
  ...DashboardRoutes,
	...CalculadoraRoutes,
  ...ConversorRoutes,
  ...TarefaRoutes
];

/**
 * forRoot ele irá pegar essa instância unica e add essas rotas.
 */
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

