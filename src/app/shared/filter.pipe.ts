import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], term): any {
    if (term) {
      return items.filter(item => item.carNumber.toLowerCase().indexOf(term.toLowerCase()) !== -1);
    } else {
      return items;
    }
  }
}