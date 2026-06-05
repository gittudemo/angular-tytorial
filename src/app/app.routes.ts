import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { Homecomp } from './homecomp/homecomp';
import { Aboutcomp } from './aboutcomp/aboutcomp';
import { Contactcomp } from './contactcomp/contactcomp';
import { Dashboard } from './dashboard/dashboard';
import { Profilr } from './dashboard/profilr/profilr';
import { Setting } from './dashboard/setting/setting';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', component: Homecomp },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: Aboutcomp },
  { path: 'contact', component: Contactcomp },
  { path: 'vision', loadComponent: () => import('./vision/vision').then((m) => m.Vision) },
  { path: 'watch', loadComponent: () => import('./watch/watch').then((m) => m.Watch) },
  { path: 'support', loadComponent: () => import('./support/support').then((m) => m.Support) },
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
  { path: '**', component: PageNotFound },
];
