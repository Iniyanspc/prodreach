import { Routes } from '@angular/router';

const t = (page: string) => `${page} | ProdReach`;

export const routes: Routes = [
  { path: '', title: 'ProdReach — Driving Demand. Building Brands.', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
  { path: 'about', title: t('About Us'), loadComponent: () => import('./pages/about/about').then((m) => m.About) },
  { path: 'apparel', title: t('Corporate Apparel'), loadComponent: () => import('./pages/apparel/apparel').then((m) => m.Apparel) },
  { path: 'strideon', title: t('StrideOn Footwear'), loadComponent: () => import('./pages/strideon/strideon').then((m) => m.StrideOn) },
  { path: 'accessories', title: t('Accessories'), loadComponent: () => import('./pages/accessories/accessories').then((m) => m.Accessories) },
  { path: 'customization', title: t('Uniform Customization'), loadComponent: () => import('./pages/customization/customization').then((m) => m.Customization) },
  { path: 'contact', title: t('Contact'), loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact) },
  { path: '**', redirectTo: '' },
];
