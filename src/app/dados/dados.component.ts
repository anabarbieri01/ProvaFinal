import { Component, Input } from '@angular/core';
import { CheckboxRequiredValidator } from '@angular/forms';
import { Todo } from '../todo';


@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css'],
})
export class DadosComponent {

  @Input() dados: Array<{ userId: number,id: number, title: string, completed:CheckboxRequiredValidator }> | null = null;

  constructor() { }

  ngOnInit(): void {
  }
}
