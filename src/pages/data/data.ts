import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
    selector: 'page-data',
    templateUrl: 'data.html'
})
export class DataPage {
    
    estado = '';
    numeroCasilla = 0;
    candidato = '';
    partidos = [
        'PRI',
        'PAN',
        'PRD',
        'MORENA',
        'Movimiento Ciudadano',
        'Nueva Alianza',
        'Partido Encuentro Social',
        'Partido Verde',
        'Partido del Trabajo'
    ];

    constructor(public navCtrl: NavController, public _navParams: NavParams, public _alertController:AlertController, public _camera: Camera) {
        this.estado = this._navParams.get('estado');
        this.numeroCasilla = this._navParams.get('casilla');
        this.candidato = this._navParams.get('candidato');
    }
    
    public takePicture(){
        
        const options: CameraOptions = {
            quality: 100,
            destinationType: this._camera.DestinationType.DATA_URL,
            encodingType: this._camera.EncodingType.JPEG,
            mediaType: this._camera.MediaType.PICTURE
        }
        
        this._camera.getPicture(options).then((imageData) => {

        }, (err) => {
            console.log(err);
        });
        
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
