import { NgModule } from '@angular/core';

import { CoreModule } from './core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { MainModule } from './main';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    // MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
