import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, fieldNames: string[]): any[] {

    if (!items) {return [];}

    if (!searchText || searchText.trim().length === 0) { return items; }

    return items.filter(item => {
        return item[fieldNames[0]].toLowerCase().includes(searchText) ||
               item[fieldNames[1]].toLowerCase().includes(searchText);
    });
  }
}
