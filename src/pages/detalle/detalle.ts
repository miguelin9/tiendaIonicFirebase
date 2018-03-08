import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Articulo } from '../../modelos/articulo';
import { ServicioProvider } from '../../providers/servicio/servicio';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

  articulo:Articulo;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public servicio: ServicioProvider,
    private alertCtrl: AlertController) {
    this.articulo = navParams.data.articulo;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

  actualizar() {
    this.navCtrl.push("ActualizarPage",{articulo:this.articulo});
  }

  borrar() {
    this.servicio.eliminarArticulo(this.articulo);
    //this.navCtrl.push("ListaPage");
    this.navCtrl.pop();
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirmar borrado',
      message: '¿Estás seguro de borrarlo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.borrar();
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }

}
