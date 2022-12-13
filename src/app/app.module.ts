import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DadosComponent } from './dados/dados.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    DadosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientModule,

)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
