import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorporateComponent } from './components/sales/goals/corporate/corporate.component';
import { RetailComponent } from './components/sales/goals/retail/retail.component';

@NgModule({
  declarations: [
    AppComponent,
    CorporateComponent,
    RetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
