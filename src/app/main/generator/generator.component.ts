import { Component, OnInit } from '@angular/core';
import { GeneratorService } from './generator.service';
import { ListCreationType } from '../../../../../src/common/list-creation-type';


@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: [
    './generator.component.scss'
  ],
  providers: [
    GeneratorService,
  ]
})
export class GeneratorComponent {
  public model = {
    module: null,
    componentName: null,
    interfacePattern: null,
    singularComponentName: null
  };

  public listCreationType = ListCreationType;
  public loading = false;
  public error: string;
  public resultLogs: string;

  constructor(private _generator: GeneratorService) {
  }

  get isDialog() {
    const pattern = this.model.interfacePattern;
    return pattern === ListCreationType.listCreateEditDialog || pattern === ListCreationType.CreateEditDialog;
  }

  get withListPattern() {
    const pattern = this.model.interfacePattern;
    return pattern !== ListCreationType.CreateEditFull && pattern !== ListCreationType.CreateEditDialog;
  }

  public generate() {
    this.loading = true;
    this._generator.generateComponent(this.model).subscribe(
      (response: { message: string }) => {
        this.loading = false;
        this.resultLogs = response.message;
      },
      (error) => {
        this.loading = false;
        this.error = error.body.error;
      });
  }
}
