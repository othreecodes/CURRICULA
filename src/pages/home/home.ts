import { Component, ViewChild} from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { Department } from '../department/department';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  item;

  constructor(public navCtrl: NavController, private params: NavParams) {
  	this.item = params.data.item;

  }

  ionViewDidLoad() {
    console.log('Hello Home Page');
  }

  openDeptPage(item) {
    this.navCtrl.push( Department, { item: item });
  }

}
