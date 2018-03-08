import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Articulo } from '../../modelos/articulo';
import { ServicioProvider } from '../../providers/servicio/servicio';


@IonicPage()
@Component({
  selector: 'page-insertar',
  templateUrl: 'insertar.html',
})
export class InsertarPage {

  myForm: FormGroup;
  articulo: Articulo;

  constructor(public navCtrl: NavController, 
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    private servicio: ServicioProvider) {
    this.myForm = this.createMyForm();
    this.articulo = {codigo:0, foto:'', nombre:'', categoria:'', precio:0, stock:0, descripcion:''};
  }

  saveData(){
    //console.log(this.myForm.value);
    
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad InsertarPage');
     //console.log(this.myForm.value);
  }

  insertar(){
   this.articulo = this.myForm.value;
   this.servicio.insertarArticulo(this.articulo);
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
