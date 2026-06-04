import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { Homecomp } from './homecomp/homecomp';
import { Aboutcomp } from './aboutcomp/aboutcomp';
import { Contactcomp } from './contactcomp/contactcomp';

export const routes: Routes = [
  { path: '', component: Homecomp },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: Aboutcomp },
  { path: 'contact', component: Contactcomp },
];
