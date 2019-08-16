import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'moduleListItem'
})
export class ModuleListItemPipe implements PipeTransform {
  transform(value: any, ...args): any {

    if (value && value.moduleFullPath) {
      return value.moduleFullPath
        .replace('/src', '')
        .replace('.ts', '');
    }

    return '-';
  }
}
