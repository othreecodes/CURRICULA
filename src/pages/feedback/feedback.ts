import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController} from 'ionic-angular';
import {Dataprovider} from "../../providers/dataprovider";

/*
  Generated class for the Feedback page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
  providers:[Dataprovider]
})
export class Feedback {

  name;
  matricnumber;
  level;
  feedback;
  course;
  week;
  constructor(public navCtrl: NavController,
              public navparams:NavParams,
              public data:Dataprovider,
              public loading:LoadingController) {
    this.course = this.navparams.get('coursecode');
    this.week = this.navparams.get('week');
    this.name = window.localStorage.getItem('name');
    this.matricnumber = window.localStorage.getItem('matricnumber');
    this.level = window.localStorage.getItem('level');


  }


  send(){
    window.localStorage.setItem('name',this.name);
    window.localStorage.setItem('matricnumber',this.matricnumber);
    window.localStorage.setItem('level',this.level);
    window.localStorage.setItem('name',this.name);

    let loader = this.loading.create({dismissOnPageChange:true});
    loader.present();

    this.data.sendFeedback(this.name,this.level,this.matricnumber,this.course,this.week,this.feedback)
      .subscribe(data=>{
        console.log(data);
        loader.dismissAll();
        alert("Feedback Sent");
      },error=>{
        console.log(error);
        loader.dismissAll();
        alert("Error occured\nCheck Internet connection");
      });
  }

}
