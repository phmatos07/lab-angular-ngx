import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StackTracesService {

  throwError(value: string): never {
    throw new Error(value);
  }
}
