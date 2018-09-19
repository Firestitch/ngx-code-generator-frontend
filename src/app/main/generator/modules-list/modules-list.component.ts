import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ModuleInterface } from '../../../shared/shared/interfaces/';


@Component({
  selector: 'app-modules-list',
  templateUrl: './modules-list.component.html',
  styleUrls: ['./modules-list.component.scss']
})
export class ModulesListComponent implements OnChanges {
  constructor() {}

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
    this.moduleChange.emit(this.module);
  }
}
