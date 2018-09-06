import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GeneratorService } from '../generator.service';


@Component({
  selector: 'app-modules-list',
  templateUrl: './modules-list.component.html',
  styleUrls: ['./modules-list.component.scss']
})
export class ModulesListComponent implements OnInit {
  constructor(private _generatorService: GeneratorService) {}

  @Input() public required;
  @Input() public module;
  @Output() public moduleChange = new EventEmitter();

  public modules = [];
  public loading = true;

  public ngOnInit() {
    this._generatorService.listOfModules().subscribe((response: any) => {
      this.modules = response.modules;
      this.loading = false;
    });
  }

  public selectModule(event) {
    this.moduleChange.next(this.modules[event.value]);
  }
}
