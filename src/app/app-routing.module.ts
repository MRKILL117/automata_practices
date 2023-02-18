import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'activity1',
    pathMatch: 'full'
  },
  {
    path: 'activity1',
    loadChildren: () => import('./pages/activity1/activity1.module').then( m => m.Activity1PageModule)
  },
  {
    path: 'activity2',
    loadChildren: () => import('./pages/activity2/activity2.module').then( m => m.Activity2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
