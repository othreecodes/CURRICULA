import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Dataprovider} from "../../providers/dataprovider";
import {CourseListing} from "../course-listing/course-listing";

/*
  Generated class for the ChooseLevel page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-choose-level',
  templateUrl: 'choose-level.html',
  providers:[Dataprovider]
})
export class ChooseLevel {
  courses = [];
  dept;
  constructor(public navCtrl: NavController,private params: NavParams,private data:Dataprovider) {
    this.dept = params.data.item;
  }

  ionViewDidLoad() {
    console.log('Hello ChooseLevel Page');
  }

  getCourses(level){

    this.courses = [];
    this.data.getCourses().subscribe(data=>{

      let allcourses = data.json();

      for( var course in allcourses){

        if(allcourses[course]['level']===level){
          this.courses.push(allcourses[course]);

        }
      }
      this.navCtrl.push(CourseListing,{courses:this.courses});
    });

  }
}
