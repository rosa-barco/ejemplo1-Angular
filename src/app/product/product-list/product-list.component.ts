import { Component, OnInit } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imageWidth:number=250;
  imageMargin:number=10;
  muestrImg:boolean=true;
  listFilter:string='';

  constructor() { }

  showImage(): void{
    this.muestrImg=!this.muestrImg;
  }

  ngOnInit(): void {
  }

  productos:IProducto[]=[
    {
      "productoId":1,
      "Modelo":'Sentra',
      "Descripcion":'Cuatro puertas, familiar',
      "Year":'2020',
      "Precio":120000,
      "Marca":'Nissan',
      "Color":'Morado',
      "ImagenURL":'https://i.ytimg.com/vi/c_ZVBV-JkCw/maxresdefault.jpg'
    },
    {
      "productoId":2,
      "Modelo":'A4',
      "Descripcion":'Cuatro puertas, familiar',
      "Year":'2020',
      "Precio":120000,
      "Marca":'AUDI',
      "Color":'Azul',
      "ImagenURL":'https://dam.automovilonline.com.mx/wp-content/uploads/2019/05/c913f56e-2020-audi-a4-30.jpg'
    },
    {
      "productoId":3,
      "Modelo":'Rio',
      "Descripcion":'Cuatro puertas, familiar',
      "Year":'2019',
      "Precio":120000,
      "Marca":'Kia',
      "Color":'Rojo',
      "ImagenURL":'https://autoprice.com.mx/storage/images/2078/exterior/CwbaoAyi9M4eqMJCv0yYEsZBizAhhcajrOUXfeB6.jpg'
    }
  ]

}
