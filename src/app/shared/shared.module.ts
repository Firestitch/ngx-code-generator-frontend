import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatFormFieldModule, MatInputModule, MatProgressSpinnerModule,
  MatSelectModule, MatButtonModule, MatCardModule, MatIconModule,
} from '@angular/material';

import { throwIfAlreadyLoaded } from '../core/module-import-guard';

import { GeneratorPreviewComponent } from './generator-preview';
import { DasherizePipe } from './shared';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    GeneratorPreviewComponent,
    DasherizePipe,
  ],
  exports: [
    BrowserModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,

    GeneratorPreviewComponent,
    DasherizePipe,
  ]
})
export class SharedModule {
  constructor( @Optional() @SkipSelf() parentModule: SharedModule) {
    throwIfAlreadyLoaded(parentModule, 'SharedModule');
  }
}
