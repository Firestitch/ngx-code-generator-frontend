import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GeneratorService {
  constructor(private _http: HttpClient) {
  }

  public listOfModules() {
    return this._http.get('/modules');
  }

  public listOfServices() {
    return this._http.get('/services');
  }

  public generateComponent(params) {
    return this._http.post('/generate', params);
  }

  public generateService(params) {
    return this._http.post('/generate/service', params);
  }
}
