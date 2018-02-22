import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

    constructor(public _navController: NavController, public _navParams: NavParams) {
        this.estado = this._navParams.get('estado');
        this.numeroCasilla = this._navParams.get('casilla');
    }

    public goPage(candidato){
        this._navController.push(DataPage, { estado: this.estado, 'casilla': this.numeroCasilla, candidato: candidato });
    }

}
