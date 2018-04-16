import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { DcComponent } from './dc/dc.component';
import { SeattleComponent } from './seattle/seattle.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'burbank',component: BurbankComponent },
  { path: 'chicago',component: ChicagoComponent },
  { path: 'dc',component: DcComponent },
  { path: 'dallas',component: DallasComponent },
  { path: 'sanjose',component: SanjoseComponent },
  { path: 'seattle',component: SeattleComponent },

  // use a colon and parameter name to include a parameter in the url
  { path: '', pathMatch: 'full', redirectTo: '/sanjose' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }