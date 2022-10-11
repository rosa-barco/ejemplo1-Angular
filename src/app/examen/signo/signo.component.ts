import { Component, OnInit } from '@angular/core';
import { ISignos } from '../examen';

@Component({
  selector: 'app-signo',
  templateUrl: './signo.component.html',
  styleUrls: ['./signo.component.css']
})
export class SignoComponent implements OnInit {

  imageWidth:number=250;
  imageMargin:number=10;

  display:string='none';
  display2:string='none';

  nombre:string='';
  apaterno:string='';
  amaterno:string='';

  dia:number=0;
  mes:number=0;
  year:number=0;

  edad:number=0;

  sexo:number=0;

  saludo:string='';

  textoSigno:string='';
  textoUrl:string='';

  constructor() { }

  ngOnInit(): void {
  }

  Signos():void{
    let txt = '';
    let url = '';

    let an = 0;

    if(this.sexo==1){
      this.saludo = '¡Bienvenida!';
    }
    else if(this.sexo==2){
      this.saludo = '¡Bienvenido!';
    }

    this.edad = 2022 - this.year;

    if(this.mes > 10){
      this.edad -= 1;
    }

    if(this.mes == 10 && this.dia > 10){
      this.edad -= 1;
    }

    an = this.year;

    if (an == 1900|| an == 1912|| an == 1924|| an == 1936|| an == 1948|| an == 1960|| an == 1972|| an == 1984|| an == 1996){
      txt = 'Rata';
      url = 'https://www.clarin.com/pages/bundles/horoscopochino/images/rata@2x.png';
      this.display = 'block';
      this.display2 = 'none';
    }
    else if (an == 1901|| an == 1913|| an == 1925|| an == 1937|| an == 1949|| an == 1961|| an == 1973|| an == 1985|| an == 1997){
      txt = 'Buey';
      url = 'https://www.clarin.com/pages/bundles/horoscopochino/images/bufalo@2x.png';
      this.display = 'block';
      this.display2 = 'none';
    }
    else if (an == 1902|| an == 1914|| an == 1926|| an == 1938|| an == 1950|| an == 1962|| an == 1974|| an == 1986|| an == 1998){
      txt = 'Tigre';
      url = 'https://www.clarin.com/pages/bundles/horoscopochino/images/tigre@2x.png';
      this.display = 'block';
      this.display2 = 'none';
    }
    else if (an == 1903|| an == 1915|| an == 1927|| an == 1939|| an == 1951|| an == 1963|| an == 1975|| an == 1987|| an == 1999){
      txt = 'Conejo';
      url = 'https://www.clarin.com/pages/bundles/horoscopochino/images/conejo@2x.png';
      this.display = 'block';
      this.display2 = 'none';
    }
    else if (an == 1904|| an == 1916|| an == 1928|| an == 1940|| an == 1952|| an == 1964|| an == 1976|| an == 1988|| an == 2000){
      txt = 'Dragón';
      url = 'https://www.clarin.com/pages/bundles/horoscopochino/images/dragon@2x.png';
      this.display = 'block';
      this.display2 = 'none';
      }
    else if (an == 1905|| an == 1917|| an == 1929|| an == 1941|| an == 1953|| an == 1965|| an == 1977|| an == 1989|| an == 2001){
      txt = 'Serpiente';
      url = 'https://www.clarin.com/pages/bundles/horoscopochino/images/serpiente@2x.png';
      this.display = 'block';
      this.display2 = 'none';
    }
    else if (an == 1906|| an == 1918|| an == 1930|| an == 1942|| an == 1954|| an == 1966|| an == 1978|| an == 1990|| an == 2002){
      txt = 'Caballo';
      url = 'https://www.clarin.com/pages/bundles/horoscopochino/images/caballo@2x.png';
      this.display = 'block';
      this.display2 = 'none';
    }
    else if (an == 1907|| an == 1919|| an == 1931|| an == 1943|| an == 1955|| an == 1967|| an == 1979|| an == 1991|| an == 2003){
      txt = 'Cabra';
      url = 'https://www.clarin.com/pages/bundles/horoscopochino/images/cabra@2x.png';
      this.display = 'block';
      this.display2 = 'none';
    }
    else if (an == 1908|| an == 1920|| an == 1932|| an == 1944|| an == 1956|| an == 1968|| an == 1980|| an == 1992|| an == 2004){
      txt = 'Mono';
      url = 'https://www.clarin.com/pages/bundles/horoscopochino/images/mono@2x.png';
      this.display = 'block';
      this.display2 = 'none';
    }
    else if (an == 1909|| an == 1921|| an == 1933|| an == 1945|| an == 1957|| an == 1969|| an == 1981|| an == 1993){
      txt = 'Gallo';
      url = 'https://www.clarin.com/pages/bundles/horoscopochino/images/gallo@2x.png';
      this.display = 'block';
      this.display2 = 'none';
    }
    else if (an == 1910|| an == 1922|| an == 1934|| an == 1946|| an == 1958|| an == 1970|| an == 1982|| an == 1994){
      txt = 'Perro';
      url = 'https://www.clarin.com/pages/bundles/horoscopochino/images/perro@2x.png';
      this.display = 'block';
      this.display2 = 'none';
    }
    else if (an == 1911|| an == 1923|| an == 1935|| an == 1947|| an == 1959|| an == 1971|| an == 1983|| an == 1995){
      txt = 'Cerdo';
      url = 'https://www.clarin.com/pages/bundles/horoscopochino/images/cerdo@2x.png';
      this.display = 'block';
      this.display2 = 'none';
    }
    else{
      txt = 'Elige un año válido (entre 1900 y 2004)';
      url='';
      this.display2='block';
      this.display='none';
    }

    this.textoSigno = txt;
    this.textoUrl = url;
  }

  limpiar(){
    this.display='none';
    this.display2='none';

    this.nombre='';
    this.apaterno='';
    this.amaterno='';

    this.dia=0;
    this.mes=0;
    this.year=0;

    this.edad=0;

    this.sexo=0;

    this.saludo='';

    this.textoSigno='';
    this.textoUrl='';
  }
}