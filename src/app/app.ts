import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Child } from './child/child';
import { CounterService } from './core/store/counter';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Child, ReactiveFormsModule, CommonModule], //importing the child component
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  myForm: FormGroup; //step6 : create a form group variable to hold the form group created in the constructor and use it in the template to bind the form controls to the input fields.
  // protected readonly title = signal('angular-tytorial');
  // name = 'Angular';
  // isAdmin = true;

  // item = [10,20,15,35,67];
  // newItems = [10,1,21,5,8];
  // count = signal(10);

  // increament() {
  //   this.count.update((c) => c + 1);
  // }

  // decreament() {
  //   this.count.update((c) => c - 1);
  // }

  // reset() {
  //   this.count.set(0);
  // }

  //how to transfer data from parent to child component using @Input decorator.

  userName: string = 'Angular'; //strp1 : create a variable in parent component and assign some value to it.

  // constructor(public counterStore : CounterService) {

  // }

  userSignal = signal({
    //step1 : create a signal variable toassign some value and pass it to FormGroup
    userName: '',
    email: '',
  });

  constructor(private fb: FormBuilder) {
    //step2 : inject the FormBuilder service in the constructor to create a form group
    this.myForm = this.fb.group({
      //step3 : create a form group and assign the signal variable to the form controls
      userName: [''], //step4 : assign some default value to the form controls
      email: [''], //step5 : assign some default value to the form controls
    });

    this.myForm.valueChanges.subscribe((value) => {
      //step7 : subscribe to the valueChanges observable of the form group to get the updated values of the form controls and update the signal variable with the new values.
      this.userSignal.set(value);
    });
  }

  sublitForm() {
    console.log(this.myForm.value); //step8 : create a function to submit the form and log the form values to the console.
    console.log(`User Name: ${this.myForm.value.userName}, Email: ${this.myForm.value.email}`); //step9 : log the form values in a formatted way to the console.
  }
}
