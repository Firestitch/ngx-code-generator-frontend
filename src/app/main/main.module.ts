import { NgModule } from '@angular/core';
import { GeneratorComponent, ModulesListComponent } from './generator';
import { SharedModule } from '../shared';


@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    GeneratorComponent,
    ModulesListComponent,
  ]
})
export class MainModule {
}
