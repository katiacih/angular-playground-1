import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  // onde o serviço será disponibilizado
  // 'root' - disponível em toda a aplicação
  // 'any' - disponível em qualquer módulo
})
export class MyServiceService {

  constructor() { 

  }
  submitService() {
    console.log('submitService');
  }
}
