import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { DataPage } from '../data/data';

@Component({
    selector: 'page-candidato',
    templateUrl: 'candidato.component.html'
})
export class CandidatoPage {
    
    estado = 'Estado';
    numeroCasilla = 0;
    /**TODO:
     * Ponte verga!!!!
     */
    candidatos = [
        'Presidente',
        'Senador',
        'Diputado',
        'Gobernador',
        'Alcalde'   
    ];

    constructor(public _navController: NavController, public _navParams: NavParams,public _alertController:AlertController) {
        this.estado = this._navParams.get('estado');
        this.numeroCasilla = this._navParams.get('casilla');
    }

    public goPage(candidato){
        this._navController.push(DataPage, { estado: this.estado, 'casilla': this.numeroCasilla, candidato: candidato });
    }

    showConfirm() {
        let confirm = this._alertController.create({
          title: 'Corroborar',
          message: '¿Estás seguro que la información es correcta?',
          buttons: [
            {
              text: 'No',
              handler: () => {
                console.log('Disagree clicked');
              }
            },
            {
              text: 'Sí',
              handler: () => {
                console.log('Agree clicked');
              }
            }
          ]
        });
        confirm.present();
      }

}
