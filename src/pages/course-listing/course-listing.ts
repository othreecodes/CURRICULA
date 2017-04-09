import { Component } from '@angular/core';
import {NavController, NavParams, AlertController, ActionSheetController} from 'ionic-angular';
import {CourseOutline} from "../course-outline/course-outline";

/*
  Generated class for the CourseListing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-course-listing',
  templateUrl: 'course-listing.html'
})
export class CourseListing {

  courses = [];
  originalCourses = [];
  constructor(public navCtrl: NavController,private navparams:NavParams,
              public alerCtrl: AlertController,private actionSheet:ActionSheetController) {
    this.courses = this.navparams.get('courses');
    this.originalCourses = this.courses;
  }

  ionViewDidLoad() {
    console.log('Hello CourseListing Page');
  }



  getItems(ev: any) {

    // set val to the value of the searchbar
    var val = ev.target.value;
    this.courses = this.originalCourses;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {

      this.courses = this.courses.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })

    }
  }

  ShowDetails(course){

    let actionSheet = this.actionSheet.create({
      title: 'Options',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          icon:'eye',
          text: 'Course Details',
          handler: () => {
            let message = "course code: "+course['code']+"<br>";
            message += "course units: "+course['unit']+"<br>";
            message += "course mode: "+course['mode']+"<br>";
            message += "course prerequisite: "+course['prereq']+"<br>";
            message += "course title: "+course['title']+"<br>";

            let alert = this.alerCtrl.create({
              title: 'Course Details',
              message: message,
              buttons: ['Ok']
            });
            alert.present()
          }
        },
        {
          icon:'list',
          text: 'Course Outline',
          handler: () => {
              this.navCtrl.push(CourseOutline,{course:course['code']});

          }
        }
      ]
    });
    actionSheet.present();



  }

}
