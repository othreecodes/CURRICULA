import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {MyApp} from "./app.component";
import {HomePage} from "../pages/home/home";
import {Department} from "../pages/department/department";
import {ChooseLevel} from "../pages/choose-level/choose-level";
import {CourseListing} from "../pages/course-listing/course-listing";
import {CourseOutline} from "../pages/course-outline/course-outline";
import {PostGraduate} from "../pages/post-graduate/post-graduate";
import {PostGraduateOutline} from "../pages/post-graduate-outline/post-graduate-outline";
import {Feedback} from "../pages/feedback/feedback";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Department,
    ChooseLevel,
    CourseListing,
    CourseOutline,
    PostGraduate,
    PostGraduateOutline,
    Feedback

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Department,
    ChooseLevel,
    CourseListing,
    CourseOutline,
    PostGraduate,
    PostGraduateOutline,
    Feedback
  ],
  providers: []
})
export class AppModule {}
