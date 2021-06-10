import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';

import { HttpClientModule } from '@angular/common/http'
import { _navComponent } from './_nav/_nav.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/_core/service/Auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    _navComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }