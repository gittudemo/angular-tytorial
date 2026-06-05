import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { Homecomp } from './homecomp/homecomp';
import { Aboutcomp } from './aboutcomp/aboutcomp';
import { Contactcomp } from './contactcomp/contactcomp';
import { Dashboard } from './dashboard/dashboard';
import { Profilr } from './dashboard/profilr/profilr';
import { Setting } from './dashboard/setting/setting';

export const routes: Routes = [
  { path: '', component: Homecomp },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: Aboutcomp },
  { path: 'contact', component: Contactcomp },
  {
    path: 'dashboard',
    component: Dashboard,

    children: [
      { path: 'profile', component: Profilr },
      // { path: 'setting', component: Setting },
      {
        path: 'setting',
        loadComponent: () => import('./dashboard/setting/setting').then((m) => m.Setting),
      },
    ],
  },
];
