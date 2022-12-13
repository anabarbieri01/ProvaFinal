import { Component } from '@angular/core';
import { Todo } from '../todo';


@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent {

  dados: Todo ;

  constructor() { }

  ngOnInit(): void {
  }
}
