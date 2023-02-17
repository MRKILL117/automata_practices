import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Activity1Page } from './activity1.page';

const routes: Routes = [
  {
    path: '',
    component: Activity1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Activity1PageRoutingModule {}
