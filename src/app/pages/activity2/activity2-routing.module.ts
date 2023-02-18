import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Activity2Page } from './activity2.page';

const routes: Routes = [
  {
    path: '',
    component: Activity2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Activity2PageRoutingModule {}
