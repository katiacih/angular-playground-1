import { Component } from '@angular/core';


// decorador necessário para definir um componente
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  myState: boolean = false;


  atualizarState(value: boolean) {
    this.myState = value;
  }

}
