import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//en la función @NgModule en la propiedad 'declarations' se le pasa un vector con un elemento que es nuestra componente 'AppComponent'.
@NgModule({ 
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

