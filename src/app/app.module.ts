import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routing } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductoFiltroPipe } from './product/producto-filtro.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { CineAngularComponent } from './cine-angular/cine-angular.component';
import { MenuComponent } from './menu/menu.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignoComponent } from './examen/signo/signo.component';
import { ExamenComponent } from './examen/examen/examen.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductoFiltroPipe,
    OperasBasComponent,
    CineAngularComponent,
    MenuComponent,
    SignoComponent,
    ExamenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
