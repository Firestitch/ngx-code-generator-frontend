import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/generator', pathMatch: 'full' },
  {
    path: 'generator',
    loadChildren: './component-generator/component-generator.module#ComponentGeneratorModule',
  },
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
