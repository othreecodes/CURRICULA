import { Component } from '@angular/core';
import {NavController, NavParams, Popover, PopoverController} from 'ionic-angular';
import {Dataprovider} from "../../providers/dataprovider";
import {Feedback} from "../feedback/feedback";

/*
  Generated class for the CourseOutline page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-course-outline',
  templateUrl: 'course-outline.html',
  providers:[Dataprovider]
})
export class CourseOutline {

  coursecode;
  courseOutline;
  weeks;
  constructor(public navCtrl: NavController,
              public navParam:NavParams,
              public data:Dataprovider,public popover:PopoverController) {
    this.coursecode = this.navParam.get('course');
    this.data.getOutline().subscribe(data=>{
      let allOutlines = data.json();
      for(var outline in allOutlines){
        let c = allOutlines[outline]['COURSECODE'];
        let d = c.toString().replace(" ","");

        if(d===this.coursecode){
          this.courseOutline = allOutlines[outline];
        }

      }
      let coursesList = this.courseOutline['DESCRIPTION'];
      this.weeks = coursesList.toString().split(";");
      console.log(this.weeks);

    })

  }

  ionViewDidLoad() {
    console.log('Hello CourseOutline Page');
  }

  giveFeedback(week){

    this.navCtrl.push(Feedback,{week:week,coursecode:this.coursecode});


  }

}
