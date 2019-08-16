import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { dasherize } from '@angular-devkit/core/src/utils/strings';
import { ListCreationType } from '../../../../../src/common/list-creation-type';

@Component({
  selector: 'generator-preview',
  templateUrl: './generator-preview.component.html',
  styleUrls: [
    './generator-preview.component.scss'
  ]
})
export class GeneratorPreviewComponent implements OnChanges {
  @Input() public params;

  public hasListInterface = false;
  public hasCreateEditInterface = false;
  public hasModel = false;

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.params && changes.params.currentValue && changes.params.currentValue.interfacePattern) {
      this.interfacePatterChanged();
    }
  }

  public interfacePatterChanged() {
    this.hasListInterface = false;
    this.hasCreateEditInterface = false;
    this.hasModel = false;

    switch (this.params.interfacePattern) {
      case 'list': {
        this.hasListInterface = true;
        this.hasModel = true;
      } break;

      case 'list-create-edit': {
        this.hasListInterface = true;
        this.hasCreateEditInterface = true;
        this.hasModel = true;
      } break;

      case 'create-edit': {
        this.hasCreateEditInterface = true;
        this.hasModel = true;
      } break;
    }
  }
}
