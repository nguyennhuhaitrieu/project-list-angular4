import { Component } from '@angular/core';
import { Course } from './../define/course.class' ;

@Component({
  selector: 'app-project-list',
  templateUrl: './../templates/project-list.component.html',
})
export class ProjectListComponent {
  courses: Course[] = [];

  constructor() {
    this.courses.push(
      new Course("C01","Ruby On Rilas","c01.jpg","Lorem ipsum dolor sit amet Lorem ipsum dolor sit   amet", 48 ,["php","angular","front-end"] )
    );

    this.courses.push(
      new Course("C02","IOS Developer","c02.jpg","Lorem ipsum dolor sit amet Lorem ipsum dolor sit   amet", 48 ,["php","angular","jquery"] )
    );

    this.courses.push(
      new Course("C03","PHP Developer","c03.jpg","Lorem ipsum dolor sit amet Lorem ipsum dolor sit   amet", 48 ,["php","angular","nodejs"] )
    );

    this.courses.push(
      new Course("C04","Java Developer","c04.jpg","Lorem ipsum dolor sit amet Lorem ipsum dolor sit   amet", 48 ,["php","angular","reactjs"] )
    );
  }
}
