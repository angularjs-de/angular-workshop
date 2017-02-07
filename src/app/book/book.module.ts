import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookDataService } from './shared/book-data.service';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HttpModule } from '@angular/http';
import { routing } from './book.routing';
import { ConfirmCandeactivateGuardService } from './shared/confirm-candeactivate-guard.service';
import { BookEditComponent } from './book-edit/book-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    routing,
    HttpModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent
  ],
  providers: [
    BookDataService,
    ConfirmCandeactivateGuardService
  ]
})
export class BookModule { }
