import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EstadoPage } from '../estado/estado';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    
    num:number = 3;
    estados = [
        'AGUASCALIENTES',
        'BAJA CALIFORNIA',
        'BAJA CALIFORNIA SUR',
        'CAMPECHE',
        'COAHUILA',
        'COLIMA',
        'CHIAPAS',
        'CHIHUAHUA',
        'CIUDAD DE MÉXICO',
        'DURANGO',
        'GUANAJUATO',
        'GUERRERO',
        'HIDALGO',
        'JALISCO',
        'MÉXICO',
        'MICHOACÁN',
        'MORELOS',
        'NAYARIT',
        'NUEVO LEÓN',
        'OAXACA',
        'PUEBLA',
        'QUERÉTARO',
        'QUINTANA ROO',
        'SAN LUIS POTOSÍ',
        'SINALOA',
        'SONORA',
        'TABASCO',
        'TAMAULIPAS',
        'TLAXCALA',
        'VERACRUZ',
        'YUCATÁN',
        'ZACATECAS'    
    ];

    constructor(public _navController: NavController) {
  
    }

    public goPage(estado){
        this._navController.push(EstadoPage, { estado: estado });
    }

}
