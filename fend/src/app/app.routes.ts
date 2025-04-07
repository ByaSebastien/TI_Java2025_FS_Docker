import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'book',pathMatch: 'full'},
  {path: 'book', loadComponent: () => import('./features/book/pages/book-index/book-index.component').then(m => m.BookIndexComponent)},
];
