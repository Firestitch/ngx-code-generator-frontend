import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ModuleInterface } from '@libs/modules-list';
import { ServicesService } from '../../../services';

import * as pluralize from 'pluralize';

@Component({
  selector: 'app-create-service-dialog',
  templateUrl: './create-service-dialog.component.html',
  styleUrls: ['./create-service-dialog.component.scss'],
})

export class CreateServiceDialogComponent {
  public model = {
    module: null,
    subdirectory: null,
    singularName: null,
    pluralName: null
  };

  public hidePath = false;

  constructor(public dialogRef: MatDialogRef<CreateServiceDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { modules: ModuleInterface[], services: any[] },
              private _servicesService: ServicesService) {
  }

  public generate() {
    this._servicesService.generateService(this.model).subscribe((res) => {
      const service = {
        servicePath: `${this.model.module.modulePath}${this.model.subdirectory}`,
        singularName: `${this.model.singularName + '.service.ts'}`,
      };

      this.dialogRef.close(service);
    });
  }

  public changedSingularName() {
    this.model.pluralName = pluralize(this.model.singularName);
  }

  public moduleChanged() {
    this.setDefaultSubDirectory();
  }

  /**
   * Hack for set default path
   * If module has services hide path dropdown and set default path from first elem
   * @todo
   */
  public setDefaultSubDirectory() {
    const moduleServices = this.data.services.find((s) => s.module === this.model.module.moduleName);
    this.hidePath = moduleServices && !!moduleServices.services.length;

    if (this.hidePath) {
      this.model.subdirectory = moduleServices.services[0].servicePath.indexOf('shared/services') !== -1
        ? '/shared/services'
        : '/services';
    } else {
      this.model.subdirectory = null;
    }
  }

}
