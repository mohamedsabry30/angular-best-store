import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template:
    '<button [disabled]="isDisabled()" class="btn btn-primary" (click)="btnClicked.emit()">{{ label() }}</button>',
  styles: 'button {wdith:100%;}',
  // styleUrl: './primary-button.component.scss',
})
export class PrimaryButtonComponent {
  label = input('');
  btnClicked = output();
  isDisabled = input(false);
}

// btn-outline-light
