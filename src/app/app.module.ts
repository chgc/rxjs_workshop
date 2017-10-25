import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeCheckModule } from './tree-check/tree-check.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, TreeCheckModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
