import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatFormFieldModule, MatInputModule, MatProgressSpinnerModule,
  MatSelectModule, MatButtonModule, MatCardModule, MatIconModule,
  MatDialogModule, MatCheckboxModule, MatTabsModule
} from '@angular/material';

import { throwIfAlreadyLoaded } from '../core/module-import-guard';

import { GeneratorPreviewComponent } from './generator-preview';
import { GeneratorLogsComponent, HighlightStatusDirective } from './generator-logs';
import { GeneratorCodeComponent } from './generator-code';
import { DasherizePipe, ClassifyPipe } from './shared';

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
    MatDialogModule,
    MatCheckboxModule,
    MatTabsModule,
  ],
  declarations: [
    GeneratorPreviewComponent,
    GeneratorLogsComponent,
    GeneratorCodeComponent,
    HighlightStatusDirective,
    DasherizePipe,
    ClassifyPipe,
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
    MatDialogModule,
    MatCheckboxModule,
    MatTabsModule,

    GeneratorPreviewComponent,
    GeneratorLogsComponent,
    GeneratorCodeComponent,
    HighlightStatusDirective,
    DasherizePipe,
    ClassifyPipe,
  ]
})
export class SharedModule {
  constructor( @Optional() @SkipSelf() parentModule: SharedModule) {
    throwIfAlreadyLoaded(parentModule, 'SharedModule');
  }
}
