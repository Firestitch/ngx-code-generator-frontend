import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { GeneratorService } from '../../generator.service';
import { ModuleInterface } from '../../../../shared/shared/interfaces/';


@Component({
  selector: 'app-create-service-dialog',
  templateUrl: './create-service-dialog.component.html',
  styleUrls: ['./create-service-dialog.component.scss'],
  providers: [
    GeneratorService
  ]
})

export class CreateServiceDialogComponent {
  public model = {
    module: null,
    subdirectory: null,
    singularName: null,
    pluralName: null
  };

  constructor(public dialogRef: MatDialogRef<CreateServiceDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { modules: ModuleInterface[] },
              private _generatorService: GeneratorService) {
  }

  public generate() {
    this._generatorService.generateService(this.model).subscribe((res) => {
      const service = {
        servicePath: `${this.model.module.modulePath}${this.model.subdirectory}`,
        singularName: this.model.singularName + '.service.ts',
        module: this.model.module
      };

      this.dialogRef.close(service);
    });
  }

}
