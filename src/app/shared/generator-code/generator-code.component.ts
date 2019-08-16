import { Component, Input, OnChanges } from '@angular/core';
import { classify, camelize } from '@angular-devkit/core/src/utils/strings';
import { ListCreationType } from '../../../../../src/common/list-creation-type';


@Component({
  selector: 'generator-code',
  templateUrl: './generator-code.component.html',
  styleUrls: [
    './generator-code.component.scss'
  ]
})
export class GeneratorCodeComponent implements OnChanges {
  @Input() model;
  @Input() component;
  @Input() pattern = null;

  public code = null;
  public listCreateType = ListCreationType;

  constructor() {

  }

  public ngOnChanges(changes) {
    if (this.model && this.component && this.pattern !== null ) {
      this.generateCode();
    }
  }

  public generateCode() {
    switch (this.pattern) {
      // case this.listCreateType.CreateEditDialog: {
      //   this.forDialogComponent();
      // } break;
      default: {
        this.code = null;
      }
    }
  }

  public forDialogComponent() {
    this.code = `\n
    import { MatDialog } from '@angular/material';\n
    \n
    public openDialog(): void {\n
      const dialogRef = this.dialog.open(${classify(this.component)}Component, {\n
        width: '400px',\n
        data: { ${camelize(this.model)}: this.${camelize(this.model)} }\n
      );\n
      \n
      dialogRef.afterClosed().subscribe(result => {\n
          this.${camelize(this.model)} = result;\n
      });\n
    }`;
  }

}
