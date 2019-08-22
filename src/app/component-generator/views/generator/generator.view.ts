import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FsMessage } from '@firestitch/message';

@Component({
  templateUrl: './generator.view.html',
  styleUrls: [ './generator.view.scss' ]
})
export class GeneratorView {

  public loading = false;
  public formData = null;
  public resultLogs: string;
  public error: string;
  public activeTab = 0;

  constructor(
    private _http: HttpClient,
    private _message: FsMessage,
  ) {}

  public formDataChange(data) {
    this.formData = data;
  }

  public generate() {
    this.loading = true;
    this._http.post('/generate', this.formData)
      .subscribe((response: { message: string }) => {
        this.loading = false;
        this.resultLogs = response.message;
        this.activeTab = 1;
      },
      (response) => {
        this.loading = false;
        this._message.error(response.error.message || response.body.error);
      });
  }
}
