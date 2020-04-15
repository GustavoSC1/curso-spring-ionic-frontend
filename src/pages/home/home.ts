import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { CredenciaisDTO } from "../../models/credenciais.dto";
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO = {
      email: "",
      senha: ""
  }

  constructor(public navCtrl: NavController, public menu: MenuController, public auth: AuthService) {

  }

  login() {
    this.auth.authenticate(this.creds)
    .subscribe(response => {
      console.log(response.headers.get('Authorization'));
      this.navCtrl.setRoot('CategoriasPage');
    },
    error => {});
  }


  //Desabilita menu quando entra na página
  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  //Habilita menu quando entra na página
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  

}
