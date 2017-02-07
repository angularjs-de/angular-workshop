import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router'
import { BookListComponent } from './book-list/book-list.component';

export const routes: Routes = [{
  path: 'books',
  component: BookListComponent
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

