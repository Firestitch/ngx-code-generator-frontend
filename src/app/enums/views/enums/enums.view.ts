import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: './enums.view.html',
  styleUrls: [ './enums.view.scss' ]
})
export class EnumsView {

  public error = '';
  public loading = false;

  public enumPath = '';
  public code = '';

  constructor(private _http: HttpClient) {}

  public save(data) {
    this.enumPath = '';
    this.code = '';

    this._http.post('/generate/enum', data)
      .subscribe((response: { code: string, path: string }) => {
          this.loading = false;
          this.error = '';
          this.code = response.code;
          this.enumPath = response.path;
        },
        (error) => {
          this.loading = false;
          this.enumPath = '';
          this.code = '';
          this.error = error.message || error.body.error;
        });
  }
}
