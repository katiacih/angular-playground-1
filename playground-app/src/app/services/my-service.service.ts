import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { 

  }
  submitService() {
    console.log('submitService');
  }
}
