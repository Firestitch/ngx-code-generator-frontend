import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FsMessage } from '@firestitch/message';


@Component({
  templateUrl: './enums.view.html',
  styleUrls: [ './enums.view.scss' ]
})
export class EnumsView {

  public loading = false;

  public enumPath = '';
  public code = '';

  constructor(
    private _http: HttpClient,
    private _message: FsMessage,
  ) {}

  public save(data) {
    this.enumPath = '';
    this.code = '';

    this._http.post('/generate/enum', data)
      .subscribe((response: { code: string, path: string }) => {
          this.loading = false;
          this.code = response.code;
          this.enumPath = response.path;
        },
        (response) => {
          this.loading = false;
          this.enumPath = '';
          this.code = '';
          this._message.error(response.error.message || response.body.error);
        });
  }
}
