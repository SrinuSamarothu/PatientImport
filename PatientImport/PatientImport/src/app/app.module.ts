import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './ReusableComponents/nav-bar/nav-bar.component';
import { NewImportsComponent } from './NewImports/new-imports/new-imports.component';
import { PageTwoComponent } from './NewImports/page-two/page-two.component';
import { Pendingimports1Component } from './PendingImports/pendingimports1/pendingimports1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NewImportsComponent,
    PageTwoComponent,
    Pendingimports1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
