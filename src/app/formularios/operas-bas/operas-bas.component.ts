import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent implements OnInit {

  num1='';
  num2='';
  operacion:string='';

  num3='';
  resultado='';
  tablas: string[] = [];

  sumar(){
    switch(this.operacion){
      case 'suma':
        this.resultado=this.num1 + ' + ' + this.num2 + ' = ' + [parseFloat(this.num1)+parseFloat(this.num2)];
        break;
      case 'resta':
        this.resultado=this.num1 + ' - ' + this.num2 + ' = ' + [parseFloat(this.num1)-parseFloat(this.num2)];
        break;
      case 'multi':
        this.resultado=this.num1 + ' * ' + this.num2 + ' = ' + [parseFloat(this.num1)*parseFloat(this.num2)];
        break;
      case 'divi':
        this.resultado=this.num1 + ' / ' + this.num2 + ' = ' + [parseFloat(this.num1)/parseFloat(this.num2)];
        break;
    }
  }

  tabla(){
    let num = parseFloat(this.num3);
    let texto2: string[] = [];

    for (let i = 1; i < 11; i++) {
      texto2.push(this.num3 + ' x ' + i + ' = ' + [num * i]);
    }

    this.tablas = texto2;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
