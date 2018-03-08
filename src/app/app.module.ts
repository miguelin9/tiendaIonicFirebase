import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// import { ListaPage } from '../pages/lista/lista';
import { InsertarPage } from '../pages/insertar/insertar';
import { ServicioProvider } from '../providers/servicio/servicio';
// import { DetallePage } from '../pages/detalle/detalle';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
    apiKey: "AIzaSyAPKD-1mkwcUtpca_x1k1RyuzX-Wed7hTs",
    authDomain: "tiendaionic.firebaseapp.com",
    databaseURL: "https://tiendaionic.firebaseio.com",
    projectId: "tiendaionic",
    storageBucket: "tiendaionic.appspot.com",
    messagingSenderId: "86418587421"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // ListaPage,
    InsertarPage
    // DetallePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, 'tiendaionic'),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // ListaPage,
    InsertarPage
    // DetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicioProvider
  ]
})
export class AppModule {}
