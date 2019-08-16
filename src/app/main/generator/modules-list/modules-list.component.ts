// import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
// import { ModuleInterface } from '../../../shared/shared/interfaces/';
// import { CreateModuleDialogComponent } from './create-module-dialog/';
// import { MatDialog } from '@angular/material';
// import { of } from 'rxjs';
// import { filter } from 'rxjs/operators';
//
//
// @Component({
//   selector: 'app-modules-list',
//   templateUrl: './modules-list.component.html',
//   styleUrls: ['./modules-list.component.scss']
// })
// export class ModulesListComponent implements OnChanges {
//   constructor(private _dialog: MatDialog) {}
//
//   @Input() public required;
//   @Input() public modules: ModuleInterface[];
//   @Input() public module: ModuleInterface;
//   @Output() public moduleChange = new EventEmitter();
//
//   public loading = true;
//
//   public ngOnChanges(changes) {
//     if (changes.modules && changes.modules.currentValue !== void 0) {
//       this.loading = false;
//     }
//   }
//
//   public fetch = (kw) => {
//     if (this.modules) {
//       if (!!kw) {
//         const matchedModules = this.modules.filter((module) => module.moduleName.indexOf(kw) > -1);
//         return of(matchedModules);
//       } else {
//         return of(this.modules);
//       }
//     }
//   }
//
//   public displayWith = (data) => {
//     if (data && data.moduleFullPath) {
//       return data.moduleFullPath
//         .replace('/src', '')
//         .replace('.ts', '');
//     }
//
//     return '-';
//   }
//
//   public selectModule(event) {
//     if (event) {
//       this.moduleChange.emit(this.module);
//     }
//   }
//
//   public openDialog() {
//     const rootModule = this.modules.find((m) => m.moduleName === 'app.module.ts');
//     const dialogRef = this._dialog.open(CreateModuleDialogComponent, {
//       width: '400px',
//       data: { rootModule }
//     });
//
//     dialogRef.afterClosed().subscribe(result => {
//       if (!result) {
//         this.moduleChange.emit('');
//         return;
//       }
//
//       this.modules.push(result);
//       this.moduleChange.emit(result);
//     });
//   }
// }
