import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloBtnComponent } from './hello-btn/hello-btn.component';
import { AlertBtnModule } from './alert-btn/alert-btn.module';


@NgModule({
  declarations: [
    AppComponent,
    HelloBtnComponent,
  ],
  imports: [
    BrowserModule,
    AlertBtnModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
