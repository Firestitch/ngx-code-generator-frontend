import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: './consts.view.html',
  styleUrls: [ './consts.view.scss' ]
})
export class ConstsView {

  public error = '';
  public loading = false;

  public constPath = '';
  public code = '';

  constructor(private _http: HttpClient,) {}

  public save(data) {
    this.constPath = '';
    this.code = '';

    this._http.post('/generate/const', data)
      .subscribe((response: { code: string, path: string }) => {
          this.loading = false;
          this.error = '';
          this.code = response.code;
          this.constPath = response.path;
        },
        (error) => {
          this.loading = false;
          this.constPath = '';
          this.code = '';
          this.error = error.message || error.body.error;
        });
  }
}
