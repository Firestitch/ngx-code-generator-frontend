import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CreateServiceDialogComponent } from './create-service-dialog/';
import { MatDialog } from '@angular/material';
import { ModuleInterface } from '../../../shared/shared/interfaces/';


@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnChanges {
  constructor(private _dialog: MatDialog) {}

  @Input() public required;
  @Input() public services;
  @Input() public modules: ModuleInterface[];
  @Input() public service;
  @Output() public serviceChange = new EventEmitter();

  public loading = true;

  public ngOnChanges(changes) {
    if (changes.services && changes.services !== void 0) {
      this.loading = false;
    }
  }

  public selectService(event) {
    if (event.value === 'new') {
      this.openDialog();
    } else {
      this.serviceChange.emit(this.service);
    }
  }

  public openDialog() {
    const dialogRef = this._dialog.open(CreateServiceDialogComponent, {
      width: '400px',
      data: { modules: this.modules, services: this.services }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        this.serviceChange.emit('');
        return;
      }

      const group = this.services.find((g) => g.module === result.module.moduleName);

      if (group) {
        group.services.push(result);
      } else {
        this.services.push({ module: result.module.moduleName, services: [result]});
      }

      this.serviceChange.emit(result);
    });
  }
}
