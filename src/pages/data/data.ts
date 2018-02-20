import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-data',
    templateUrl: 'data.html'
})
export class DataPage {
    
    estado = 'Estado';
    numeroCasilla = 0;
    candidatos = [ 'Presidente', 'Senador', 'Diputado', 'Alcalde' ];

    constructor(public navCtrl: NavController, public _navParams: NavParams, public _alertController:AlertController) {
        this.estado = this._navParams.get('estado');
        this.numeroCasilla = this._navParams.get('casilla');
    }

    showConfirm() {
        let confirm = this._alertController.create({
          title: 'Corroborar',
          message: '¿Estás seguro que la información es correcta?',
          buttons: [
            {
              text: 'Disagree',
              handler: () => {
                console.log('Disagree clicked');
              }
            },
            {
              text: 'Agree',
              handler: () => {
                console.log('Agree clicked');
              }
            }
          ]
        });
        confirm.present();
      }

}
