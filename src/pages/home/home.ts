import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    rootPage:string = 'startPage';

    constructor(public navCtrl: NavController) {
  
    }

    goToOtherPage() {
        //push another page onto the history stack
        //causing the nav controller to animate the new page in
        this.navCtrl.push('AboutPage');
      }

}
