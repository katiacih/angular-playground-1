import { Component, inject } from '@angular/core';
import { MyServiceService } from '../../services/my-service.service';


// decorador necessário para definir um componente
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   private myService = inject(MyServiceService);
  myState: boolean = false;
  texto: string = 'Texto';
  ariaLabel: string = 'Aria Label';
  showTitle: boolean = true;
  title: string = 'Título';
  subtitle: string = 'Subtítulo';
  listItems: string[] = ['Item 1', 'Item 2', 'Item 3'];


  atualizarState(value: boolean) {
    this.myState = value;
  }

  // método que será chamado ao clicar no botão
  // o método irá atualizar o valor da variável myState
  submit(event: Event) {
    console.log('submit', event);
    this.myState = !this.myState;
    this.myService.submitService();
  }
}
