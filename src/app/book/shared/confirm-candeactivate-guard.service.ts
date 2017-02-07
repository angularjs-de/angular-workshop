import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { BookDetailComponent } from '../book-detail/book-detail.component';

@Injectable()
export class ConfirmCandeactivateGuardService implements CanDeactivate<BookDetailComponent>{

  constructor() { }

  canDeactivate() {
    return window.confirm('Are you sure?');
  }

}
