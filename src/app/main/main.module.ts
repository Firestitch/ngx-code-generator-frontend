import { NgModule } from '@angular/core';
import { GeneratorComponent, ModulesListComponent } from './generator';
import { SharedModule } from '../shared';
import { CreateServiceDialogComponent, ServicesListComponent } from './generator/services-list/';


@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    GeneratorComponent,
    ModulesListComponent,
    ServicesListComponent,
    CreateServiceDialogComponent,
  ],
  entryComponents: [
    CreateServiceDialogComponent
  ]
})
export class MainModule {
}
