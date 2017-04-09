import { Component } from '@angular/core';
import {NavController, NavParams, ActionSheetController, AlertController} from 'ionic-angular';
import {Dataprovider} from "../../providers/dataprovider";
import {CourseOutline} from "../course-outline/course-outline";
import {PostGraduateOutline} from "../post-graduate-outline/post-graduate-outline";


/*
  Generated class for the PostGraduate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post-graduate',
  templateUrl: 'post-graduate.html',
  providers:[Dataprovider]
})
export class PostGraduate {
  courses = [];
  originalCourses = [];
  dept;
  constructor(public navCtrl: NavController,private params: NavParams,private data:Dataprovider,
              private actionSheet:ActionSheetController,private alertCtrl:AlertController) {
    this.dept = params.data.item;
    this.data.getPGcourses().subscribe(data=>{
      this.courses = data.json();
      this.originalCourses = this.courses;
    });

    console.log(this.originalCourses);
  }

  getItems(ev: any) {

    // set val to the value of the searchbar
    var val = ev.target.value;
    this.courses = this.originalCourses;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {

      this.courses = this.courses.filter((item) => {
        return (item.COURSETITLE.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })

    }
  }

  ShowDetails(course){

    let actionSheet = this.actionSheet.create({
      title: 'Program',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          icon:'eye',
          text: 'Course Details',
          handler: () => {
            let message = "course code: "+course['COURSECODE']+"<br>";
            message += "course title: "+course['COURSETITLE']+"<br>";

            let alert = this.alertCtrl.create({
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
            this.navCtrl.push(PostGraduateOutline,{course:course['COURSECODE']});

          }
        }
      ]
    });
    actionSheet.present();



  }


}
