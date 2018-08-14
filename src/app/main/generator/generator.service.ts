import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';


@Injectable()
export class GeneratorService {
  constructor(private _http: HttpClient) {
  }

  public listOfModules() {
    return this._http.get('/modules');
  }

  public generateComponent(params) {
    return this._http.post('/generate', params);
  }
}
