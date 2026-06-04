import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  title = input<string>(); //step1 : create a variable in card component and decorate it with @Input decorator and specify the type of data it will receive from parent component.

  description = input<string>(); //step2 : create a variable in card component and decorate it with @Input decorator and specify the type of data it will receive from parent component.
}
