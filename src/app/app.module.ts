import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DadosComponent } from './dados/dados.component';
import { HttpClientModule } from '@angular/common/http';
import { TabelaComponent } from './tabela/tabela.component';



@NgModule({
  declarations: [
    AppComponent,
    DadosComponent,
    TabelaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
