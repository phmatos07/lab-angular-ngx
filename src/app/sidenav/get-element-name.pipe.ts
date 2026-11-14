import { Pipe, PipeTransform } from '@angular/core';
import { MAIN_ROUTE_NAME } from '../app.routes';

@Pipe({
    name: 'getElementName',
    standalone: true
})
export class GetElementNamePipe implements PipeTransform {
    transform(path?: string): string {
        return !path || path === '' ? MAIN_ROUTE_NAME : path;
    }
}