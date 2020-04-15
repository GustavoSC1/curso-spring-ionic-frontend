import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoriaService } from '../services/domain/categoria.service';
import { ErrorInterceptorProvider } from '../interceptors/error-interceptor';

//Decorator é uma anoatação que vai configurações para alterar a classe
@NgModule({
  //lista de componentes ou páginas que fazem parte desse módulo
  declarations: [
    MyApp
  ],
  //Lista de modulos que são importados por esse módulo
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  //Indica como a aplicação irá iniciar
  bootstrap: [IonicApp],
  //Quando o declarations for uma página, e não apenas um componente, a mesma coisa que for declarada lá também
  //tem que ser declarado aqui
  entryComponents: [
    MyApp
  ],
  //Vai ser declarada as classes que você quer que os objetos injetados dessas classes sejam uma instancia única 
  //para este módulo
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriaService,
    ErrorInterceptorProvider
  ]
})
export class AppModule {}
// No typescript quando você quer que uma classe ou qualquer outro elemento seja importado por outro arquivo
//você tem que usar a palavra export