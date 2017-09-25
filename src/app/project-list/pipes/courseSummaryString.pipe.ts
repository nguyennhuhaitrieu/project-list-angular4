import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  'name': 'courseSummaryString'
})

export class CourseSummaryStringPipe implements PipeTransform {
  transform(value: string, typeSummary: number = 0 ): string {
    if(value) {
      let limit: number = 0;
      if(typeSummary == 0 ) limit = 10;
      if(typeSummary == 1 ) limit = 40;
      if(typeSummary == 2 ) return value;

      return value.substring(0, limit) + "...";
    } else {
      return '';
    }
  }
}
