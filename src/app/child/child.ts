import { Component, input , signal} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  childUserName = input<string>(); //step2 : create a variable in child component and decorate it with @Input decorator and specify the type of data it will receive from parent component.

  //update child to parent using signal

  message = signal(''); //step1 : create a signal variable in child component to hold the data that will be sent to parent component.


  updateMessage() {
    this.message.set('Hello from child component!'); //step2 : update the signal variable with the data that you want to send to parent component.
  }
}
