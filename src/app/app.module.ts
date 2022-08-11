import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {DemoMaterialModule} from './material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

   

@NgModule({
  imports:      [ BrowserModule, FormsModule , DemoMaterialModule , BrowserAnimationsModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
