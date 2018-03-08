import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Articulo } from '../../modelos/articulo';
import { ServicioProvider } from '../../providers/servicio/servicio';

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  articulos: Observable<Articulo[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public servicio: ServicioProvider
  ) {
    this.articulos = this.servicio.getArticulos();
    this.articulos.subscribe(
      arr => {/*console.log(arr);*/}
    );
  }

  irDetalle(articulo:Articulo) {     
    //carga perezosa de la pagina. Evita cargar todas las paginas en memoria
    this.navCtrl.push("DetallePage", {articulo:articulo});
     }
  
  }


// codigo:number;
//     foto:string;
//     nombre:string;
//     categoria:string;
//     precio:number;
//     stock:number;
//     descripcion:string;

// nuevoArticulo() {
//   let a:Articulo = {codigo:2000,foto:"foto",nombre:"miguel",categoria:"categoria",precio:52,stock:6,descripcion:"drescripcion"};
//   this.servicio.insertarArticulo(a);