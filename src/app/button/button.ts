import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {

  label = input<string>();
   //step1 : create a variable in button component and decorate it with @Input decorator and specify the type of data it will receive from parent component.

   clicked = output<void>(); 
   //step2 : create a variable in button component and decorate it with @Output decorator and specify the type of data it will emit to parent component.

   onClick() {
    this.clicked.emit(); 
    //step3 : create a function in button component to emit the event when the button is clicked and call this function in the template when the button is clicked.
   }
}
