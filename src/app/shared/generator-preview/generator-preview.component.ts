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
    return this.params.interfacePattern === this.listCreationType.listCreateEditFull ||
      this.params.interfacePattern === this.listCreationType.CreateEditFull
  }

  get isDialog() {
    const pattern = this.params.interfacePattern;
    return pattern === ListCreationType.listCreateEditDialog || pattern === ListCreationType.CreateEditDialog;
  }
}
