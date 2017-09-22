import { Component, Input } from '@angular/core';
import { Course } from './../define/course.class' ;

@Component({
  selector: 'app-course',
  templateUrl: './../templates/course.component.html',
})
export class CourseComponent {
  @Input ("course") courseObj: Course;
}
