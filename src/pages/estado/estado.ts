import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataPage } from '../data/data';

@Component({
    selector: 'page-estado',
    templateUrl: 'estado.html'
})
export class EstadoPage {

    numeroCasillas = [ 1, 2, 3];
    estado = 'Estado';

    constructor(public _navController: NavController, public _navParams: NavParams) {
        this.estado = this._navParams.get('estado');
    }

    public goPage(i){
        this._navController.push(DataPage, { estado: this.estado, 'casilla': i });
    }
}
