import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Articulo } from '../../modelos/articulo';
import { ServicioProvider } from '../../providers/servicio/servicio';


@IonicPage()
@Component({
  selector: 'page-actualizar',
  templateUrl: 'actualizar.html',
})
export class ActualizarPage {

  myForm: FormGroup;
  articulo: Articulo;
  key: string;

  constructor(public navCtrl: NavController, 
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    private servicio: ServicioProvider) {
    this.myForm = this.createMyForm();
    this.articulo = navParams.data.articulo;
    this.key = this.articulo.key;
  }

  saveData(){
    //console.log(this.myForm.value);
    
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad InsertarPage');
     //console.log(this.myForm.value);
  }

  actualizar(){
    // console.log('-------' + this.myForm.value);
    // console.log('antes de asignar datos:' + this.articulo.key);
    this.articulo = this.myForm.value;
    // console.log('despues de asignar datos:' + this.articulo.key);
   this.servicio.actualizarArticulo(this.key, this.articulo);
   this.navCtrl.push("ListaPage");
  }

  private createMyForm(){
    return this.formBuilder.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      stock: ['', Validators.required],
      precio: ['', Validators.required],
      foto: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required]
  
    });
  }

}
