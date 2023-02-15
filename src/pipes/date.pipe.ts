import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'date'})

export class DatePipe implements PipeTransform {
  transform(value: string): string {
    return new Date(value).toDateString();
  }
}