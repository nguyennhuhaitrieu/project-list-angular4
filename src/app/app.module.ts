import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/components/project-list.component';
import { ControlComponent } from './project-list/components/control.component';
import { CourseComponent } from './project-list/components/course.component';
import { CourseCapitalizePipe } from './project-list/pipes/courseCapitalize.pipe';
import { CourseSummaryStringPipe } from './project-list/pipes/courseSummaryString.pipe';
import { CourseCategoryPipe } from './project-list/pipes/courseCategory.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ControlComponent,
    CourseComponent,
    CourseCapitalizePipe,
    CourseSummaryStringPipe,
    CourseCategoryPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
