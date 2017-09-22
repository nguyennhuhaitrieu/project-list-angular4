import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/components/project-list.component';
import { ControlComponent } from './project-list/components/control.component';
import { CourseComponent } from './project-list/components/course.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ControlComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
