import { NgModule } from '@angular/core';
import { GeneratorComponent, ModulesListComponent, CreateModuleDialogComponent,
        CreateServiceDialogComponent, ServicesListComponent} from './generator';
import { SharedModule } from '../shared';


@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    GeneratorComponent,
    ModulesListComponent,
    ServicesListComponent,
    CreateServiceDialogComponent,
    CreateModuleDialogComponent,
  ],
  entryComponents: [
    CreateServiceDialogComponent,
    CreateModuleDialogComponent
  ]
})
export class MainModule {
}
