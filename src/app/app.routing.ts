import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';

export const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/books'
}];

export const routing = RouterModule.forRoot(routes);
