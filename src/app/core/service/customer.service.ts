import { Injectable } from '@angular/core';
import { DATA } from 'src/app/core/data';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor() {}

  getData() {
    return DATA; 
  }
}
