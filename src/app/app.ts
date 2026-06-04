import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Child } from './child/child';
import { CounterService } from './core/store/counter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Child], //importing the child component
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
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


  userName : string = "Angular";  //strp1 : create a variable in parent component and assign some value to it.


  constructor(public counterStore : CounterService) {   

  }

}
