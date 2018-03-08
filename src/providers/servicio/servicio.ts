import { Injectable } from '@angular/core';
import { Articulo } from '../../modelos/articulo';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServicioProvider {

  private articulosRef:AngularFireList<any>;

  constructor(public db: AngularFireDatabase) {
      this.articulosRef = this.db.list<Articulo>('tiendaionic');
      console.log(this.articulosRef);
  }
  getArticulos(): Observable<Articulo[]> {
      return this.articulosRef.snapshotChanges().map((arr) => {
          return arr.map((snap) => Object.assign(snap.payload.val(), { key: snap.key }) );
        });
  }
  insertarArticulo(articulo:Articulo) {
      this.articulosRef.push(articulo);
  }
  actualizarArticulo(key:string, articulo:Articulo) {
      console.log('--------------------' + key);
      this.articulosRef.update(key, articulo);
  }
  eliminarArticulo(articulo:Articulo) {
      this.articulosRef.remove(articulo.key);
  }
}
