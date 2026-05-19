import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  message = 'Welcome to the Home component!';
  //items = [12, 25, 14, 18, 20];
  items = [];
}
