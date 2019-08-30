import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'moduleListItem'
})
export class ModuleListItemPipe implements PipeTransform {
  transform(value: any, ...args): any {

    let path = '';

    if (value && value.moduleFullPath) {
      if (value.moduleFullPath.indexOf('src/') === 0) {
        path = value.moduleFullPath.replace('src/', '');
      } else if (value.moduleFullPath.indexOf('/src/') === 0) {
        path = value.moduleFullPath.replace('/src/', '');
      } else if (value.moduleFullPath.indexOf('src\\') === 0) {
        path = value.moduleFullPath.replace('src\\', '');
      } else if (value.moduleFullPath.indexOf('\\src\\') === 0) {
        path = value.moduleFullPath.replace('\\src\\', '');
      }

      return path.replace('.ts', '');
    }

    return '-';
  }
}
