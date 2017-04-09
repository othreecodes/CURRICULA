import { Component } from '@angular/core';
import {Loading, NavController, ActionSheetController, ToastController} from 'ionic-angular';
import { HomePage } from '../home/home';
import {ChooseLevel} from "../choose-level/choose-level";
import {PostGraduate} from "../post-graduate/post-graduate";


@Component({
  selector: 'page-department',
  templateUrl: 'department.html'
})
export class Department {
	searchQuery: string = '';
  	items = [];
  	sems = [];

  constructor(public navCtrl: NavController ,public actcontrol: ActionSheetController,public toast:ToastController) {
  	this.depts();
  }

  depts() {
    this.items = [

    {
      "name": "Department of Archaeology/Anthropology",
      "code": "arc",
      "hod": "Dr Amos Tutuola",
      "sems": {
      	"first": "First Semester",
      	"second": "Second Semester",
      	"third": "Third Semester",
      	"fourth": "Fourth Semester"
      },
      "levs": {
      	"one": "100 Level",
      	"two": "200 Level",
      	"three": "300 Level",
      	"four": "400 Level",
      	"five": "500 Level"
      },
    },{
      "name": "Department of Botany",
      "code": "bot",
      "hod": "Dr Ben Okri",
      "sems": {
      	"first": "First Semester",
      	"second": "Second Semester",
      	"third": "Third Semester",
      	"fourth": "Fourth Semester"
      },
      "levs": {
      	"one": "100 Level",
      	"two": "200 Level",
      	"three": "300 Level",
      	"four": "400 Level",
      	"five": "500 Level"
      },
    },{
      "name": "Department of Chemistry",
      "code": "chem",
      "hod": "Dr Chimamanda Ngozi Adichie",
      "sems": {
      	"first": "First Semester",
      	"second": "Second Semester",
      	"third": "Third Semester",
      	"fourth": "Fourth Semester"
      },
      "levs": {
      	"one": "100 Level",
      	"two": "200 Level",
      	"three": "300 Level",
      	"four": "400 Level",
      	"five": "500 Level"
      },
    },{
      "name": "Department of Computer Science",
      "code": "csc",
      "hod": "Dr Oladejo",
      "courses": "code. title, unit, status",
      "sems": {
      	"first": "First Semester",
      	"second": "Second Semester",
      	"third": "Third Semester",
      	"fourth": "Fourth Semester"
      },
      "levs": {
      	"one": "100 Level",
      	"two": "200 Level",
      	"three": "300 Level",
      	"four": "400 Level",
      	"five": "500 Level"
      },
    },{
      "name": "Department of Geography",
      "code": "geo",
      "hod": "Prof Chimamanda Adichie",
      "sems": {
      	"first": "First Semester",
      	"second": "Second Semester",
      	"third": "Third Semester",
      	"fourth": "Fourth Semester"
      },
      "levs": {
      	"one": "100 Level",
      	"two": "200 Level",
      	"three": "300 Level",
      	"four": "400 Level",
      	"five": "500 Level"
      },
    },{
      "name": "Department of Geology",
      "code": "gey",
      "hod": "Dr Ngozi Adichie",
      "sems": {
      	"first": "First Semester",
      	"second": "Second Semester",
      	"third": "Third Semester",
      	"fourth": "Fourth Semester"
      },
      "levs": {
      	"one": "100 Level",
      	"two": "200 Level",
      	"three": "300 Level",
      	"four": "400 Level",
      	"five": "500 Level"
      },
    },{
      "name": "Department of Microbiology",
      "code": "mcb",
      "hod": "Dr Chimamanda Adichie",
      "sems": {
      	"first": "First Semester",
      	"second": "Second Semester",
      	"third": "Third Semester",
      	"fourth": "Fourth Semester"
      },
      "levs": {
      	"one": "100 Level",
      	"two": "200 Level",
      	"three": "300 Level",
      	"four": "400 Level",
      	"five": "500 Level"
      },
    },{
      "name": "Department of Mathematics",
      "code": "mth",
      "hod": "Prof Ngozi Adichie",
      "sems": {
      	"first": "First Semester",
      	"second": "Second Semester",
      	"third": "Third Semester",
      	"fourth": "Fourth Semester"
      },
      "levs": {
      	"one": "100 Level",
      	"two": "200 Level",
      	"three": "300 Level",
      	"four": "400 Level",
      	"five": "500 Level"
      },
    },{
      "name": "Department of Physics",
      "code": "phy",
      "hod": "Dr Chimamanda Adichie",
      "sems": {
      	"first": "First Semester",
      	"second": "Second Semester",
      	"third": "Third Semester",
      	"fourth": "Fourth Semester"
      },
      "levs": {
      	"one": "100 Level",
      	"two": "200 Level",
      	"three": "300 Level",
      	"four": "400 Level",
      	"five": "500 Level"
      },
    },{
      "name": "Department of Statistics",
      "code": "stat",
      "hod": "Dr Chimamanda Ngozi",
      "sems": {
      	"first": "First Semester",
      	"second": "Second Semester",
      	"third": "Third Semester",
      	"fourth": "Fourth Semester"
      },
      "levs": {
      	"one": "100 Level",
      	"two": "200 Level",
      	"three": "300 Level",
      	"four": "400 Level",
      	"five": "500 Level"
      },
    },{
      "name": "Department of Zoology",
      "code": "zoo",
      "hod": "Dr Chimamanda Ngozi",
      "sems": {
      	"first": "<h2>1. First Semester 2. First Semester 3. First Semester</h2>",
      	"second": "Second Semester",
      	"third": "Third Semester",
      	"fourth": "Fourth Semester"
      },
      "levs": {
      	"one": "100 Level",
      	"two": "200 Level",
      	"three": "300 Level",
      	"four": "400 Level",
      	"five": "500 Level"
      },
    },
  ];
 }

  ionViewDidLoad() {
    console.log('Hello Department Page');
    console.log(this.items);
  }

  openStatusPage(item) {

    if(item['code']!=='csc'){
      let toast = this.toast.create({
          message: item['name'] + ' Information unavailable',
          duration: 2000,
          position:'bottom'
        }
      );
      toast.present();
    }

    else {
      let actionSheet = this.actcontrol.create({
        title: 'Program',
        cssClass: 'action-sheets-basic-page',
        buttons: [
          {
            text: 'Undergraduate',
            handler: () => {
              // console.log(item);
              this.navCtrl.push(ChooseLevel,{item:item})

            }
          },
          {
            text: 'Postgraduate',
            handler: () => {
              this.navCtrl.push(PostGraduate,{item:item})
            }
          }
        ]
      });
      actionSheet.present();
    }
    // this.navCtrl.push( Status, { item: item });
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.depts();

    // set val to the value of the searchbar
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}



