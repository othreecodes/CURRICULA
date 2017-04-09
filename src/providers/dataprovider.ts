import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

/*
  Generated class for the Dataprovider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Dataprovider {

  constructor(public http: Http) {
    console.log('Hello Dataprovider Provider');
  }


  getCourses():Observable<any>{

    return this.http.get('assets/data/courses.json');

  }
 getOutline():Observable<any>{

    return this.http.get('assets/data/description.json');

  }

  getPGcourses():Observable<any>{

    return this.http.get('assets/data/masters.json');

  }


  sendFeedback(namem,levelm,matricnumberm,coursecodem,weekm,feedbackm):Observable<any>{
    let body = JSON.stringify({
      name:namem,
      level:levelm,
      matricnumber:matricnumberm,
      coursecode:coursecodem,
      week:weekm,
      feedback:feedbackm
    });

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://uicurriculum.pythonanywhere.com/add/',body,options);
  }


}
