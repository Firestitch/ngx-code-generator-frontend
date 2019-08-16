import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { CreateServiceDialogComponent } from './create-service-dialog/';
import { MatDialog } from '@angular/material';
import { of } from 'rxjs';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ServicesListComponent),
      multi: true
    }
  ]
})
export class ServicesListComponent implements ControlValueAccessor {
  constructor(private _dialog: MatDialog) {}

  @Input() public required;

  @Input()
  set services(val) {
    this.loading = !val;

    if (val) {
      this._sortServices(val);

      this._services = val.reduce((acc, group) => {
        group.services.forEach((service) => {
          acc.push(service);
        });

        return acc;
      }, []);

    } else {
      this._services = val;
    }
  }

  @Input() public service;
  @Output() public serviceChange = new EventEmitter();

  public loading = true;

  public onChange: any = () => {};
  public onTouch: any = () => {};

  private _services;

  get services() {
    return this._services;
  }

  public fetch = (kw) => {
    if (this.services) {
      if (!!kw) {
        const matchedModules = this.services.filter((service) => {
          return service.servicePath.indexOf(kw) > -1 || service.singularName.indexOf(kw) > -1;
        });
        return of(matchedModules);
      } else {
        return of(this.services);
      }
    }
  }

  public displayWith = (data) => {
    if (data) {
      let path = '';
      if (data.servicePath.indexOf('src/') === 0) {
        path += data.servicePath.replace('src/', '');
      } else if (data.servicePath.indexOf('/src/') === 0) {
        path += data.servicePath.replace('/src/', '');
      }

      path += '/' + data.singularName.replace('.ts', '');

      return path;
    }

    return data;
  }

  public selectService(event) {
    this.writeValue(event);

    if (event) {
      this.serviceChange.emit(this.service);
    }
  }

  public openDialog() {
    const dialogRef = this._dialog.open(CreateServiceDialogComponent, {
      width: '400px',
      data: { services: this.services }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        this.serviceChange.emit('');
        return;
      }

      this.services.push(result);
    });
  }

  public writeValue(value) {
    this.service = value;
    this.onChange(value);
    this.onTouch(value);
  }

  public registerOnChange(fn) { this.onChange = fn;  }
  public registerOnTouched(fn) { this.onTouch = fn; }

  private _sortServices(val) {
    // First level sort by module
    val.sort((a, b) => {
      if (a.module < b.module) {
        return -1;
      } else if (a.module > b.module) {
        return 1;
      }

      return 0;
    });

    // Sort by service name
    val.forEach((group) => {
      if (group.services) {
        group.services.sort((a, b) => {
          if (a.singularName < b.singularName) {
            return -1;
          } else if (a.singularName > b.singularName) {
            return 1;
          }

          return 0;
        })
      }
    })
  }
}
