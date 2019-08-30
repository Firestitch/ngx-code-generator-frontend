import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'serviceListItem'
})
export class ServiceListItemPipe implements PipeTransform {
  transform(value: any, ...args): any {
    let path = '';

    if (value) {
      if (value.fullPath.indexOf('src/') === 0) {
        path = value.fullPath.replace('src/', '');
      } else if (value.fullPath.indexOf('/src/') === 0) {
        path = value.fullPath.replace('/src/', '');
      } else if (value.fullPath.indexOf('src\\') === 0) {
        path = value.fullPath.replace('src\\', '');
      } else if (value.fullPath.indexOf('\\src\\') === 0) {
        path = value.fullPath.replace('\\src\\', '');
      }

      return path.replace('.ts', '');
    }

    return '-';
  }
}
