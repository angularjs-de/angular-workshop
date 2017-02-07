import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../shared/book-data.service';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute, private bookService: BookDataService) { }

  ngOnInit() {

    this.route.params.mergeMap((params: { isbn: string }) => this.bookService.getBookByIsbn(params.isbn))
      .subscribe(book => this.book = book);
  }

  onSubmit(value) {

    this.bookService.updateBook(this.book.isbn, value)
      .subscribe((book: Book) => console.log('Book updated', book));
  }

}
