import { Component } from '@angular/core';
import { GeneratorService } from './generator.service';


@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: [
    './generator.component.scss'
  ],
  providers: [
    GeneratorService,
  ]
})
export class GeneratorComponent {
  public model = {
    module: null,
    componentName: null,
    interfacePattern: null
  };

  constructor(private _generator: GeneratorService) {
  }

  public generate() {
    this._generator.generateComponent(this.model).subscribe((response) => {
      console.log(response);
    });
  }
}
