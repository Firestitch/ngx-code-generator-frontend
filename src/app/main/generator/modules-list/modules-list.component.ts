import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ModuleInterface } from '../../../shared/shared/interfaces/';
import { CreateModuleDialogComponent } from './create-module-dialog/';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-modules-list',
  templateUrl: './modules-list.component.html',
  styleUrls: ['./modules-list.component.scss']
})
export class ModulesListComponent implements OnChanges {
  constructor(private _dialog: MatDialog) {}

  @Input() public required;
  @Input() public modules: ModuleInterface[];
  @Input() public module: ModuleInterface;
  @Output() public moduleChange = new EventEmitter();

  public loading = true;

  public ngOnChanges(changes) {
    if (changes.modules && changes.modules !== null) {
      this.loading = false;
    }
  }

  public selectModule(event) {
    if (event.value === 'new') {
      this.openDialog();
    } else {
      this.moduleChange.emit(this.module);
    }
  }

  public openDialog() {
    const rootModule = this.modules.find((m) => m.moduleName === 'app.module.ts');
    const dialogRef = this._dialog.open(CreateModuleDialogComponent, {
      width: '400px',
      data: { rootModule }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        this.moduleChange.emit('');
        return;
      }

      this.modules.push(result);
      this.moduleChange.emit(result);
    });
  }
}
