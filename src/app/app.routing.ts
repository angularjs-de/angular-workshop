import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

export const routes: Routes = [{
  path: 'books/:isbn',
  component: BookDetailComponent
}, {
  path: 'books',
  component: BookListComponent
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: '/books'
}];

export const routing = RouterModule.forRoot(routes);
