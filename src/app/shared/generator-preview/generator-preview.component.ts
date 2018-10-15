import { Component, Input } from '@angular/core';
import { dasherize } from '@angular-devkit/core/src/utils/strings';
import { ListCreationType } from '../../../../../src/common/list-creation-type';

@Component({
  selector: 'generator-preview',
  templateUrl: './generator-preview.component.html',
  styleUrls: [
    './generator-preview.component.scss'
  ]
})
export class GeneratorPreviewComponent {
  @Input() public params;

  public listCreationType = ListCreationType;
  public dasherize = dasherize;

  get isFullCreateEdit() {
    const pattern = this.params.interfacePattern;
    return pattern === ListCreationType.listCreateEditFull || pattern === ListCreationType.CreateEditFull;
  }

  get isDialog() {
    const pattern = this.params.interfacePattern;
    return pattern === ListCreationType.listCreateEditDialog || pattern === ListCreationType.CreateEditDialog;
  }

  get isCreateEdit() {
    const pattern = this.params.interfacePattern;
    return pattern === ListCreationType.CreateEditDialog || pattern === ListCreationType.CreateEditFull;
  }

  get serviceSubdirectory() {
    return this.params.service.servicePath.indexOf('shared/services') !== -1 ? 'shared/services' : 'services';
  }
}
