import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule }  from '@angular/http';

import { AppComponent }             from './app.component';

import { UserComponent }      from './user.component';

import './rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    UserComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
