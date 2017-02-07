import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shout'
})
export class ShoutPipe implements PipeTransform {

  transform(value: any, additional: string = '!!!'): any {

    return `${value.toString().toUpperCase()}${additional}`;
  }

}
