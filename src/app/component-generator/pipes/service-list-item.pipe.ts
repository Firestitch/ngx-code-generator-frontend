import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'serviceListItem'
})
export class ServiceListItemPipe implements PipeTransform {
  transform(value: any, ...args): any {
    let path = '';

    if (value) {
      if (value.servicePath.indexOf('src/') === 0) {
        path += value.servicePath.replace('src/', '');
      } else if (value.servicePath.indexOf('/src/') === 0) {
        path += value.servicePath.replace('/src/', '');
      }

      path += '/' + value.singularName.replace('.ts', '');

      return path;
    }

    return '-';
  }
}
