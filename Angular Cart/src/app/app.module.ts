import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryComponent } from './app/inventory/inventory.component';
import { AddProdComponent } from './app/add-prod/add-prod.component';
import { CartComponent } from './app/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    AddProdComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
