import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dateformat' })
export class DateFormatPipe implements PipeTransform {

    twoDigits(number: any) {
        number = parseInt(number);
        if (number < 10) return '0' + number;
        return number;
    }

    transform(value: any, args: string[]): any {
        if (!value) {
            value = new Date();
        }
        if (value.iso) {
            value = value.iso;
        }
        var val = new Date(value);
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return monthNames[val.getMonth()] + ' ' + this.twoDigits(val.getDate()) + ' ' + val.getFullYear() + ' at ' + this.twoDigits(val.getHours()) + ':' + this.twoDigits(val.getMinutes());
    }
}