import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { GeneratorComponent } from './main';

export const routes: Routes = [
  { path: '', redirectTo: '/generator', pathMatch: 'full' },
  {
    path: 'generator',
    component: GeneratorComponent,
  },
  { path: '**', redirectTo: '/login' }
];


@NgModule({
  imports: [ RouterModule.forRoot(
    routes,
    {
      useHash: false,
      preloadingStrategy: PreloadAllModules,
    })
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
