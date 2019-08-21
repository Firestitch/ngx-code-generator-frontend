import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ConstService {
  constructor(private _http: HttpClient) {
  }

  public getEnumsForModule(modulePath: string) {
    return this._http.get('/generate/enums-list', { params: { enumPath: modulePath } });
    // return of([{"enumPath":"src/app/account/enums","enumFile":"visitors.enum.ts","enumFullPath":"src/app/account/enums/visitors.enum.ts"}]);
  }

  public getEnumDetails(enumPath: string) {
    return this._http.get('/generate/enum-keys-list', {
      params: {
        enumPath: enumPath
      }
    });
  }
}
