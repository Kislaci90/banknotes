import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingRoutingModule } from './routing-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { SingleDenominationComponent } from '../single-denomination/single-denomination.component';
import { MultiDenominationComponent } from '../multi-denomination/multi-denomination.component';

const routes: Routes = [
  { path: 'single', component: SingleDenominationComponent },
  { path: 'multi', component: MultiDenominationComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    RoutingRoutingModule
  ]
})
export class RoutingModule { }
