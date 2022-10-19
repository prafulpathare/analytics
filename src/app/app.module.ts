import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { ProductComponent } from './screens/product/product.component';
import { SearchComponent } from './components/search/search.component';
import { KeyValuePipe } from './components/pipes/key-value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ProductComponent,
    KeyValuePipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
