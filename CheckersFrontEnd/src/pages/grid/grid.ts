import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Grid page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-grid',
  templateUrl: 'grid.html'
})
export class GridPage {
  gameState: any[]; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {




    this.gameState = [
      'R',
      'R',
      'R',
      'R',
      'R',
      'R',
      'R',
      'R',
      'R',
      'R',
      'R',
      'R',
      'null',
      'null',
      'null',
      'null',
      'null',
      'null',
      'null',
      'null',
      'W',
      'W',
      'W',
      'W',
      'W',
      'W',
      'W',
      'W',
      'W',
      'W',
      'W',
      'W'   

    ]
  } 


      myFunction(): void {
    var x = document.createElement("IMG");
     x.setAttribute("src", "../../assets/RedChecker.png");
      document.body.appendChild(x);
    }

    nextPage(): void {

      console.log('Hello!');
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GridPage');
  }

}
