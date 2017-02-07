import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';

export const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/books'
}, {
  path: 'books',
  loadChildren: './book/book.module#BookModule'
}];

export const routing = RouterModule.forRoot(routes);
