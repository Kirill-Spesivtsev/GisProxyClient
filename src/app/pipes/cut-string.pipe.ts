import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutString'
})
export class CutStringPipe implements PipeTransform {

  transform(value: string, length: number): string {
    if (!value) return '';
    if (value.length <= length) return value;

    const truncated = value.substring(0, length);
    const lastSpaceIndex = truncated.lastIndexOf(' ');

    if (lastSpaceIndex === -1) {
      return truncated + '...';
    }

    return truncated.substring(0, lastSpaceIndex) + '...';
  }

}
