import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {

  respuesta1: string = '';
  respuesta2: string = '';
  respuesta3: string = '';
  respuesta4: string = '';
  respuesta5: string = '';

  display: string = 'none';
  display1: string = 'none';
  display2: string = 'none';
  display3: string = 'none';
  display4: string = 'none';
  display5: string = 'none';
  display6: string = 'none';

  total: number = 0;
  totalmal: number = 0;
  prom: number = 0;

  aprob: string = '';
  mensaje: string = '';

  hacer:number = 0;

  examen() {
    if(this.hacer == 0){

      this.display = 'block';
      this.display6 = 'none';

      let res = [this.respuesta1, this.respuesta2, this.respuesta3, this.respuesta4, this.respuesta5];

      for (let i = 0; i < res.length; i++) {
        if (res[i] == 'c') {
          this.total += 1;
        } else {
          this.totalmal += 1;
        }
      }

      this.prom = (this.total * 10) / 5;

      if (this.prom >= 8) {
        this.aprob = '¡Has aprobado!'
      } else {
        this.aprob = '¡Has reprobado!'
      }

      this.hacer = 1;
    }else{
      this.display = 'none';
      this.display6 = 'block';
      this.mensaje = '¡Limpia el formulario para volverlo a hacer!'
    }
  }

  respuestas(i: number) {
    switch (i) {
      case 1:
        this.display1 = 'block';
        this.display2 = 'none';
        this.display3 = 'none';
        this.display4 = 'none';
        this.display5 = 'none';
        break;
      case 2:
        this.display1 = 'none';
        this.display2 = 'block';
        this.display3 = 'none';
        this.display4 = 'none';
        this.display5 = 'none';
        break;
      case 3:
        this.display1 = 'none';
        this.display2 = 'none';
        this.display3 = 'block';
        this.display4 = 'none';
        this.display5 = 'none';
        break;
      case 4:
        this.display1 = 'none';
        this.display2 = 'none';
        this.display3 = 'none';
        this.display4 = 'block';
        this.display5 = 'none';
        break;
      case 5:
        this.display1 = 'none';
        this.display2 = 'none';
        this.display3 = 'none';
        this.display4 = 'none';
        this.display5 = 'block';
        break;
    }
  }

  limpiar() {
    this.respuesta1 = '';
    this.respuesta2 = '';
    this.respuesta3 = '';
    this.respuesta4 = '';
    this.respuesta5 = '';

    this.total = 0;
    this.totalmal = 0;
    this.prom = 0;

    this.hacer = 0;

    this.display6 = 'none';
    this.display = 'none';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
