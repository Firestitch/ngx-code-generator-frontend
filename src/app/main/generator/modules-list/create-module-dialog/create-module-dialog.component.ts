import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { GeneratorService } from '../../generator.service';
import { ModuleInterface } from '../../../../shared/shared/interfaces/';

@Component({
  selector: 'app-create-module-dialog',
  templateUrl: './create-module-dialog.component.html',
  styleUrls: ['./create-module-dialog.component.scss'],
  providers: [
    GeneratorService
  ]
})

export class CreateModuleDialogComponent implements OnInit {
  public model = {
    module: null,
    name: null,
    routing: true
  };

  constructor(public dialogRef: MatDialogRef<CreateModuleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { rootModule: ModuleInterface },
              private _generatorService: GeneratorService) {
  }

  public ngOnInit() {
    this.model.module = this.data.rootModule;
  }

  public generate() {
    this._generatorService.generateModule(this.model).subscribe((res) => {
      const module = {
        moduleName: this.model.name + '.module.ts',
        modulePath: this.model.module.modulePath + '/' + this.model.name
      };
      this.dialogRef.close(module);
    });
  }

}
