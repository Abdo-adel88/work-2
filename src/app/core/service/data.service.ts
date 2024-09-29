// src/app/data.service.ts
import { Injectable } from '@angular/core';
import { DATA } from 'src/app/core/data';

@Injectable({
  providedIn: 'root'
})
export class DataServices {
  constructor() {}

  getData() {
    return DATA; 
  }
}
