import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CineAngularComponent } from './cine-angular/cine-angular.component';
import { ExamenComponent } from './examen/examen/examen.component';
import { SignoComponent } from './examen/signo/signo.component';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const appRoutes: Routes = [
  {path:'', component: ProductListComponent},
  {path:'Suma', component: OperasBasComponent},
  {path:'Cinemex', component: CineAngularComponent},
  {path:'Examen', component: ExamenComponent},
  {path:'Horoscopo', component: SignoComponent}
];

export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
