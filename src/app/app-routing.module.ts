import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router'
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

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

