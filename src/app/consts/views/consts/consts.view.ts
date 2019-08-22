import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FsMessage } from '@firestitch/message';


@Component({
  templateUrl: './consts.view.html',
  styleUrls: [ './consts.view.scss' ]
})
export class ConstsView {

  public error = '';
  public loading = false;

  public constPath = '';
  public code = '';

  constructor(
    private _http: HttpClient,
    private _message: FsMessage,
  ) {}

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
        (response) => {
          this.loading = false;
          this.constPath = '';
          this.code = '';
          this._message.error(response.error.message || response.body.error);
        });
  }
}
