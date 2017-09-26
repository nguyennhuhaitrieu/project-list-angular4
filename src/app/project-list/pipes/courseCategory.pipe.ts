import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  'name': 'courseCategory'
})

export class CourseCategoryPipe implements PipeTransform {
	transform(categories: string[]): string {
		let result: string[] = [];

		if(categories) {
			categories.forEach(category => {
				if(result.indexOf(category) <= -1) {
					result.push('<a href="#"><span class="label label-success">'+ category +'</span></a>');
				}
			})
		}
		return result.join(" ");
	}
}
