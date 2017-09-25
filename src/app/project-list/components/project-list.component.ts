import { Component } from '@angular/core';
import { Course } from './../define/course.class' ;

@Component({
  selector: 'app-project-list',
  templateUrl: './../templates/project-list.component.html',
})
export class ProjectListComponent {
  courses: Course[] = [];
  typeSummary: number = 1;
  typeCurrency: string = "usd";

  changeSummary(value: number) {
    this.typeSummary = value;
  }

  changeCurrentcy(value: string) {
    this.typeCurrency = value;
  }

  constructor() {
    this.courses.push(
      new Course("C01","ruby on rails","c01.jpg","Lorem ipsum dolor sit amet Lorem ipsum dolor sit   amet text1", 48 ,["php","angular","front-end"] )
    );

    this.courses.push(
      new Course("C02","iOS developer","c02.jpg","Lorem ipsum dolor sit amet Lorem ipsum dolor sit   amet text2", 65 ,["php","angular","jquery"] )
    );

    this.courses.push(
      new Course("C03","php developer","c03.jpg","Lorem ipsum dolor sit amet Lorem ipsum dolor sit   amet text3", 80 ,["php","angular","nodejs"] )
    );

    this.courses.push(
      new Course("C04","java developer","c04.jpg","Lorem ipsum dolor sit amet Lorem ipsum dolor sit   amet text4", 55 ,["php","angular","reactjs"] )
    );
  }
}
