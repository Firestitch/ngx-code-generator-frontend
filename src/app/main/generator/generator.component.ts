import { Component, OnInit } from '@angular/core';
import { GeneratorService } from './generator.service';
import { ListCreationType } from '../../../../../src/common/list-creation-type';
import { ModuleInterface } from '../../shared/shared/interfaces/';

import * as pluralize from 'pluralize';

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
export class GeneratorComponent implements OnInit {
  public model = {
    module: null,
    service: null,
    interfacePattern: null,
    singularComponentName: null,
    pluralComponentName: null,
    singularModelName: null,
    pluralModelName: null
  };

  public listCreationType = ListCreationType;
  public loading = false;
  public error: string;
  public resultLogs: string;
  public modules: ModuleInterface[];
  public services;

  private _pluralModelEditable = true;
  private _singularModelEditable = true;
  private _pluralComponentEditable = true;

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

  public ngOnInit() {
    this._generator.listOfModules().subscribe((response: any) => {
      this.modules = response.modules;
    });

    this._generator.listOfServices().subscribe((response: any) => {
      this.services = response.services;
    });
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

  public changedPluralComponent() {
    if (this._pluralModelEditable) {
      this.model.pluralModelName = this.model.pluralComponentName;
    }
  }

  public changedSingularComponent() {
    if (this._pluralComponentEditable) {
      this.model.pluralComponentName = pluralize(this.model.singularComponentName);
      this.model.pluralModelName = this.model.pluralComponentName;
    }

    if (this._singularModelEditable) {
      this.model.singularModelName = this.model.singularComponentName;
    }
  }

  public onPluralComponentBlur() {
    if (this.model.pluralComponentName && pluralize(this.model.singularComponentName) !== this.model.pluralComponentName) {
      this._pluralComponentEditable = false;
    }
  }

  public onSingularModelBlur() {
    if (this.model.singularModelName && this.model.singularComponentName !== this.model.singularModelName) {
      this._singularModelEditable = false;
    }
  }

  public onPluralModelBlur() {
    if (this.model.pluralModelName && this.model.pluralComponentName !== this.model.pluralModelName) {
      this._pluralModelEditable = false;
    }
  }

}
